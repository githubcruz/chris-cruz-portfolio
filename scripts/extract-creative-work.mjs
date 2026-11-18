import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
const root=process.cwd();
const input=Buffer.concat(Array.from({length:8},(_,i)=>readFileSync(join(root,'assets','creative-work',`part-${i}.bin`))));
const checksum=createHash('sha256').update(input).digest('hex');
if(checksum!=='94457485b6cc640ce84497fdf5dcf0a450327472d230202026c9dfa3777a2ed7') throw Error('Creative artwork archive integrity check failed');
const archive=gunzipSync(input);
const destination=join(root,'public','creative-media','work');
let offset=0, count=0;
while(offset+512<=archive.length){
  const header=archive.subarray(offset,offset+512);
  if(header.every(byte=>byte===0)) break;
  const name=header.toString('utf8',0,100).split(String.fromCharCode(0))[0];
  const size=parseInt(header.toString('ascii',124,136).replaceAll(String.fromCharCode(0),'').trim()||'0',8);
  if(!Number.isFinite(size)||size<0||offset+512+size>archive.length) throw Error('Invalid creative artwork archive');
  const type=header.toString('ascii',156,157);
  if(type==='0'||type===String.fromCharCode(0)){
    if(!/^images\/[0-9]{3}_[a-z0-9-]+\.webp$/.test(name)) throw Error(`Unexpected artwork filename: ${name}`);
    mkdirSync(destination,{recursive:true});
    writeFileSync(join(destination,basename(name)),archive.subarray(offset+512,offset+512+size));
    count++;
  }
  offset+=512+Math.ceil(size/512)*512;
}
if(count!==59) throw Error(`Expected 59 artworks, found ${count}`);
console.log(`Prepared ${count} original-resolution creative artwork files`);
