// Non-destructive cleanup of small yellow annotation markers embedded in
// the original Optik design-board exports (029–032). Leave the source assets
// untouched and replace only yellow-marker clusters in the upper image region.
import sharp from "sharp";
import {mkdir} from "node:fs/promises";
import {join} from "node:path";

const inputDir=join(process.cwd(),"public","creative-media","work");
const outputDir=join(process.cwd(),"public","creative-media","cleaned");
await mkdir(outputDir,{recursive:true});

for(const number of [29,30,31,32]){
  const filename=`${String(number).padStart(3,"0")}_optik.webp`;
  const {data,info}=await sharp(join(inputDir,filename)).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const {width:w,height:h,channels:c}=info;
  const maxY=Math.floor(h*0.38);
  const points=[];
  // Board 032 includes yellow pixels in its photographs; restrict cleanup
  // to the blank upper-right canvas containing the remaining annotation.
  const startX=number===32?Math.floor(w*.70):0;
  const endX=number===32?Math.ceil(w*.94):w;
  for(let y=0;y<maxY;y++){
    for(let x=startX;x<endX;x++){
      const i=(y*w+x)*c;
      const [r,g,b]=[data[i],data[i+1],data[i+2]];
      // Yellow annotation strokes, not blue eye/gray wireframe art.
      if(r>150 && g>105 && b<165 && r>g*.90 && g>b*1.32 && r>b*1.42)points.push([x,y]);
    }
  }
  // Group all yellow strokes; the little icon occupies one isolated region.
  if(points.length>=2){
    const x0=Math.min(...points.map(p=>p[0])), x1=Math.max(...points.map(p=>p[0]));
    const y0=Math.min(...points.map(p=>p[1])), y1=Math.max(...points.map(p=>p[1]));
    const spanX=x1-x0+1,spanY=y1-y0+1;
    if(spanX<w*.12 && spanY<h*.12){
      const pad=Math.max(5,Math.round(Math.min(w,h)*.009));
      const left=Math.max(0,x0-pad),right=Math.min(w-1,x1+pad);
      const top=Math.max(0,y0-pad),bottom=Math.min(h-1,y1+pad);
      const sample=[];
      const sampleAt=(x,y)=>{const i=(y*w+x)*c;sample.push([data[i],data[i+1],data[i+2]]);};
      // Sample unmarked image canvas around the tiny marker and use the
      // median background color instead of a hard-coded white rectangle.
      for(let d=2;d<=8;d+=2){
        sampleAt(Math.max(0,left-d),Math.max(0,top-d));
        sampleAt(Math.min(w-1,right+d),Math.max(0,top-d));
        sampleAt(Math.max(0,left-d),Math.min(h-1,bottom+d));
        sampleAt(Math.min(w-1,right+d),Math.min(h-1,bottom+d));
      }
      const median=k=>sample.map(p=>p[k]).sort((a,b)=>a-b)[Math.floor(sample.length/2)];
      const rgb=[median(0),median(1),median(2)];
      for(let y=top;y<=bottom;y++){
        for(let x=left;x<=right;x++){
          const i=(y*w+x)*c;
          data[i]=rgb[0];data[i+1]=rgb[1];data[i+2]=rgb[2];
        }
      }
      console.log(`Optik ${filename}: cleared yellow marker x=${left}-${right} y=${top}-${bottom} (${points.length} pixels)`);
    }else{
      console.warn(`Optik ${filename}: detected yellow spans too large; preserving source for manual review`);
    }
  }else console.log(`Optik ${filename}: no yellow annotation found`);
  await sharp(data,{raw:{width:w,height:h,channels:c}}).webp({quality:96,effort:5}).toFile(join(outputDir,filename));
}
