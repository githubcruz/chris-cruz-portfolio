// Replace only large, connected neutral gray screenshot canvases in Pekaboo
// source artwork (043/044). Never alter original files in /work.
// Keep the black illustration line work, pink accents and inner white artboards.
import sharp from "sharp";
import {mkdir} from "node:fs/promises";
import {join} from "node:path";

const root=process.cwd();
const inputDir=join(root,"public","creative-media","work");
const outputDir=join(root,"public","creative-media","cleaned");
await mkdir(outputDir,{recursive:true});

for(const num of [43,44]){
  const file=`${String(num).padStart(3,"0")}_pekaboo.webp`;
  const {data,info}=await sharp(join(inputDir,file)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const {width,height,channels}=info;
  const pixels=width*height;
  const visited=new Uint8Array(pixels);
  const queue=new Int32Array(pixels);
  const maxDiff=(a,b,c)=>Math.max(a,b,c)-Math.min(a,b,c);
  const candidate=(i)=>{
    const p=i*channels;
    const r=data[p],g=data[p+1],b=data[p+2];
    // Gray screenshot background is approximately RGB 96,95,95.
    // Excludes black line work, white artwork, and saturated pink details.
    return r>=70&&r<=155&&g>=70&&g<=155&&b>=70&&b<=155&&maxDiff(r,g,b)<=12;
  };
  let removed=0,regions=0;
  for(let start=0;start<pixels;start++){
    if(visited[start])continue;
    visited[start]=1;
    if(!candidate(start))continue;
    let head=0,tail=1;
    queue[0]=start;
    while(head<tail){
      const i=queue[head++];
      const x=i%width, y=Math.floor(i/width);
      for(const adjacent of [x>0?i-1:-1,x+1<width?i+1:-1,y>0?i-width:-1,y+1<height?i+width:-1]){
        if(adjacent<0||visited[adjacent])continue;
        visited[adjacent]=1;
        if(candidate(adjacent))queue[tail++]=adjacent;
      }
    }
    // Only a large backdrop area should qualify; don't erase small gray
    // details in the original character artwork.
    if(tail>=Math.max(500,Math.round(pixels*0.012))){
      regions++;
      removed+=tail;
      for(let n=0;n<tail;n++){
        const p=queue[n]*channels;
        data[p]=255;data[p+1]=255;data[p+2]=255;data[p+3]=255;
      }
    }
  }
  await sharp(data,{raw:{width,height,channels}})
    .webp({quality:96,alphaQuality:100,effort:5})
    .toFile(join(outputDir,file));
  console.log(`Pekaboo ${file}: normalized ${removed} gray background pixels in ${regions} large region(s)`);
}
