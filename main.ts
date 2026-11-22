import{mkdirSync as a,readdirSync as b,readFileSync as c,writeFileSync as d}from"node:fs";
import{join as e}from"node:path";
function f(p,q){let n=p.length,D=new Int32Array(256),C=new Int32Array(64),A=new Int32Array(256),o=new Uint8Array(65536),s=0,h=0,l=0,i=0,x=0,t=0,v=0,w=0,g=0;
let r=z=>({o:o.subarray(0,l),e:z}),E=new TextEncoder;
for(;;){if(t==1e6)return r(10);if(x<0||x>=n)return r(9);let y=p[x];
let m=y==1?1:y==2?4:y>47&&y<52?2:0;if(x+m>=n)return r(9);t++;let z=x+1+m;x=z;g=p[z-2]|p[z-1]<<8;
if(y>15&&y<35&&y!=23&&y!=27&&y!=31){if(s<2)return r(2);let b=D[s-1];v=D[s-2];
if(y>18&&y<23&&!b)return r(4);
w=y==16?v+b:y==17?v-b:y==18?Math.imul(v,b):y==19?v==-2147483648&&b==-1?v:v/b:y==20?b==-1?0:v%b:y==21?(v>>>0)/(b>>>0):y==22?(v>>>0)%(b>>>0):y==24?v&b:y==25?v|b:y==26?v^b:y==28?v<<(b&31):y==29?v>>(b&31):y==30?v>>>(b&31):y==32?v==b?1:0:y==33?v<b?1:0:(v>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=w;continue}
switch(y){
case 0:return r(0);
case 1:case 2:case 82:if(s>255)return r(3);D[s++]=y==1?(p[z-1]<<24)>>24:y==2?p[z-4]|p[z-3]<<8|p[z-2]<<16|p[z-1]<<24:i<q.length?q[i++]:-1;break;
case 3:if(!s)return r(2);s--;break;
case 4:if(!s)return r(2);if(s>255)return r(3);D[s]=D[s-1];s++;break;
case 5:if(s<2)return r(2);v=D[s-1];D[s-1]=D[s-2];D[s-2]=v;break;
case 6:if(s<2)return r(2);if(s>255)return r(3);D[s]=D[s-2];s++;break;
case 7:if(s<3)return r(2);v=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=v;break;
case 23:if(!s)return r(2);D[s-1]=-D[s-1];break;
case 27:if(!s)return r(2);D[s-1]=~D[s-1];break;
case 48:x=z+((g<<16)>>16);break;
case 49:case 50:if(!s)return r(2);v=D[--s];if((y==49)==(v==0))x=z+((g<<16)>>16);break;
case 51:if(h==64)return r(7);C[h++]=z;x=g;break;
case 52:if(!h)return r(8);x=C[--h];break;
case 64:if(!s)return r(2);v=D[s-1];if(v<0||v>255)return r(6);D[s-1]=A[v];break;
case 65:if(s<2)return r(2);v=D[s-1];g=D[s-2];if(v<0||v>255)return r(6);s-=2;A[v]=g;break;
case 80:if(!s)return r(2);w=E.encode(""+D[s-1]);if(l+w.length>65536)return r(11);s--;o.set(w,l);l+=w.length;break;
case 81:if(!s)return r(2);if(l>65535)return r(11);o[l++]=D[--s]&255;break;
case 83:if(!s)return r(2);return r(D[--s]&255);default:return r(5)}}}
let I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let k of b(I).sort()){let u=f(c(e(I,k,"program.bin")),c(e(I,k,"input.bin")));a(e(O,k),{recursive:true});d(e(O,k,"stdout.bin"),u.o);d(e(O,k,"exit.txt"),u.e+"\n")}
