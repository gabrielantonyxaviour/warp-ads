(()=>{"use strict";var e={729:(e,t)=>{}},t={};(function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports})(729);function n(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){if(e.type.startsWith("tuple"))return`(${n(e.components,{includeName:t})})${e.type.slice(5)}`;return e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}function i(e,{strict:t=!0}={}){return!!e&&("string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")))}function s(e){return i(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}class r extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:"viem@2.17.2"});const n=t.cause instanceof r?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof r&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...i?[`Docs: ${t.docsBaseUrl??"https://viem.sh"}${i}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=i,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}class a extends r{constructor({data:e,params:t,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${n(t,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=i}}class c extends r{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends r{constructor({expectedLength:e,givenLength:t,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class l extends r{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${s(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends r{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends r{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class h extends r{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class f extends r{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class y extends r{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class m extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}class b extends r{constructor({offset:e,position:t,size:n}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class g extends r{constructor({size:e,targetSize:t,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function v(e,{dir:t,size:n=32}={}){return"string"==typeof e?w(e,{dir:t,size:n}):function(e,{dir:t,size:n=32}={}){if(null===n)return e;if(e.length>n)throw new g({size:e.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let s=0;s<n;s++){const r="right"===t;i[r?s:n-s-1]=e[r?s:e.length-s-1]}return i}(e,{dir:t,size:n})}function w(e,{dir:t,size:n=32}={}){if(null===n)return e;const i=e.replace("0x","");if(i.length>2*n)throw new g({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`}class $ extends r{constructor({max:e,min:t,signed:n,size:i,value:s}){super(`Number "${s}" is not in safe ${i?`${8*i}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class P extends r{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class z extends r{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function x(e,{size:t}){if(s(e)>t)throw new z({givenSize:s(e),maxSize:t})}function I(e,t={}){const{signed:n}=t;t.size&&x(e,{size:t.size});const i=BigInt(e);if(!n)return i;const s=(e.length-2)/2;return i<=(1n<<8n*BigInt(s)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*s,"f")}`)-1n}function A(e,t={}){return Number(I(e,t))}const O=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function B(e,t={}){const n=`0x${Number(e)}`;return"number"==typeof t.size?(x(n,{size:t.size}),v(n,{size:t.size})):n}function j(e,t={}){let n="";for(let t=0;t<e.length;t++)n+=O[e[t]];const i=`0x${n}`;return"number"==typeof t.size?(x(i,{size:t.size}),v(i,{dir:"right",size:t.size})):i}function S(e,t={}){const{signed:n,size:i}=t,s=BigInt(e);let r;i?r=n?(1n<<8n*BigInt(i)-1n)-1n:2n**(8n*BigInt(i))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));const o="bigint"==typeof r&&n?-r-1n:0;if(r&&s>r||s<o){const t="bigint"==typeof e?"n":"";throw new $({max:r?`${r}${t}`:void 0,min:`${o}${t}`,signed:n,size:i,value:`${e}${t}`})}const a=`0x${(n&&s<0?(1n<<BigInt(8*i))+BigInt(s):s).toString(16)}`;return i?v(a,{size:i}):a}const E=new TextEncoder;function M(e,t={}){return j(E.encode(e),t)}const U=new TextEncoder;function R(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){const n=S(e,t);return C(n)}(e,t):"boolean"==typeof e?function(e,t={}){const n=new Uint8Array(1);if(n[0]=Number(e),"number"==typeof t.size)return x(n,{size:t.size}),v(n,{size:t.size});return n}(e,t):i(e)?C(e,t):T(e,t)}const L={zero:48,nine:57,A:65,F:70,a:97,f:102};function N(e){return e>=L.zero&&e<=L.nine?e-L.zero:e>=L.A&&e<=L.F?e-(L.A-10):e>=L.a&&e<=L.f?e-(L.a-10):void 0}function C(e,t={}){let n=e;t.size&&(x(n,{size:t.size}),n=v(n,{dir:"right",size:t.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,o=new Uint8Array(s);for(let e=0,t=0;e<s;e++){const n=N(i.charCodeAt(t++)),s=N(i.charCodeAt(t++));if(void 0===n||void 0===s)throw new r(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);o[e]=16*n+s}return o}function T(e,t={}){const n=U.encode(e);return"number"==typeof t.size?(x(n,{size:t.size}),v(n,{dir:"right",size:t.size})):n}const k=e=>pink.hash("keccak256",e);function _(e,t){const n=t||"hex",s=k(i(e,{strict:!1})?R(e):e);return"bytes"===n?s:function(e,t={}){return"number"==typeof e||"bigint"==typeof e?S(e,t):"string"==typeof e?M(e,t):"boolean"==typeof e?B(e,t):j(e,t)}(s)}const V=new m(8192);function D(e,t){if(V.has(`${e}.${t}`))return V.get(`${e}.${t}`);const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=_(T(n),"bytes"),s=(t?n.substring(`${t}0x`.length):n).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&s[e]&&(s[e]=s[e].toUpperCase()),(15&i[e>>1])>=8&&s[e+1]&&(s[e+1]=s[e+1].toUpperCase());const r=`0x${s.join("")}`;return V.set(`${e}.${t}`,r),r}const W=/^0x[a-fA-F0-9]{40}$/,Z=new m(8192);function F(e){return"string"==typeof e[0]?function(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}(e):function(e){let t=0;for(const n of e)t+=n.length;const n=new Uint8Array(t);let i=0;for(const t of e)n.set(t,i),i+=t.length;return n}(e)}function q(e,t,n,{strict:s}={}){return i(e,{strict:!1})?function(e,t,n,{strict:i}={}){G(e,t);const s=`0x${e.replace("0x","").slice(2*(t??0),2*(n??e.length))}`;i&&J(s,t,n);return s}(e,t,n,{strict:s}):Y(e,t,n,{strict:s})}function G(e,t){if("number"==typeof t&&t>0&&t>s(e)-1)throw new b({offset:t,position:"start",size:s(e)})}function J(e,t,n){if("number"==typeof t&&"number"==typeof n&&s(e)!==n-t)throw new b({offset:n,position:"end",size:s(e)})}function Y(e,t,n,{strict:i}={}){G(e,t);const s=e.slice(t,n);return i&&J(s,t,n),s}function H(e,t){if(e.length!==t.length)throw new d({expectedLength:e.length,givenLength:t.length});const n=function({params:e,values:t}){const n=[];for(let i=0;i<e.length;i++)n.push(K({param:e[i],value:t[i]}));return n}({params:e,values:t}),i=Q(n);return 0===i.length?"0x":i}function K({param:e,value:t}){const n=X(e.type);if(n){const[i,s]=n;return function(e,{length:t,param:n}){const i=null===t;if(!Array.isArray(e))throw new f(e);if(!i&&e.length!==t)throw new u({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let s=!1;const r=[];for(let t=0;t<e.length;t++){const i=K({param:n,value:e[t]});i.dynamic&&(s=!0),r.push(i)}if(i||s){const e=Q(r);if(i){const t=S(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?F([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:F(r.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:s}})}if("tuple"===e.type)return function(e,{param:t}){let n=!1;const i=[];for(let s=0;s<t.components.length;s++){const r=t.components[s],o=K({param:r,value:e[Array.isArray(e)?s:r.name]});i.push(o),o.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Q(i):F(i.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!function(e,t){const{strict:n=!0}=t??{},i=`${e}.${n}`;if(Z.has(i))return Z.get(i);const s=!(!W.test(e)||e.toLowerCase()!==e&&n&&D(e)!==e);return Z.set(i,s),s}(e))throw new y({address:e});return{dynamic:!1,encoded:w(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){if("boolean"!=typeof e)throw new r(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:w(B(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){return function(e,{signed:t}){return{dynamic:!1,encoded:S(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")})}if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,n]=t.type.split("bytes"),i=s(e);if(!n){let t=e;return i%32!=0&&(t=w(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:F([w(S(i,{size:32})),t])}}if(i!==Number.parseInt(n))throw new l({expectedSize:Number.parseInt(n),value:e});return{dynamic:!1,encoded:w(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=M(e),n=Math.ceil(s(t)/32),i=[];for(let e=0;e<n;e++)i.push(w(q(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:F([w(S(s(t),{size:32})),...i])}}(t);throw new p(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Q(e){let t=0;for(let n=0;n<e.length;n++){const{dynamic:i,encoded:r}=e[n];t+=i?32:s(r)}const n=[],i=[];let r=0;for(let o=0;o<e.length;o++){const{dynamic:a,encoded:c}=e[o];a?(n.push(S(t+r,{size:32})),i.push(c),r+=s(c)):n.push(c)}return F([...n,...i])}function X(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}class ee extends Error{constructor(e,t={}){const n=t.cause instanceof ee?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof ee&&t.cause.docsPath||t.docsPath;super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...i?[`Docs: https://abitype.dev${i}`]:[],...n?[`Details: ${n}`]:[],"Version: abitype@1.0.5"].join("\n")),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiTypeError"}),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=i,this.metaMessages=t.metaMessages,this.shortMessage=e}}class te extends ee{constructor({params:e}){super("Failed to parse ABI parameters.",{details:`parseAbiParameters(${JSON.stringify(e,null,2)})`,docsPath:"/api/human#parseabiparameters-1"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiParametersError"})}}class ne extends ee{constructor({param:e}){super("Invalid ABI parameter.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParameterError"})}}class ie extends ee{constructor({param:e,name:t}){super("Invalid ABI parameter.",{details:e,metaMessages:[`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SolidityProtectedKeywordError"})}}class se extends ee{constructor({param:e,type:t,modifier:n}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidModifierError"})}}class re extends ee{constructor({param:e,type:t,modifier:n}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`,`Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidFunctionModifierError"})}}class oe extends ee{constructor({abiParameter:e}){super("Invalid ABI parameter.",{details:JSON.stringify(e,null,2),metaMessages:["ABI parameter type is invalid."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiTypeParameterError"})}}function ae(e,t){const n=e.exec(t);return n?.groups}const ce=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ue=/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,le=/^\(.+?\).*?$/;const de=/^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;function pe(e){return de.test(e)}function he(e){return ae(de,e)}const fe=new Set(["memory","indexed","storage","calldata"]),ye=(new Set(["indexed"]),new Set(["calldata","memory","storage"]));class me extends ee{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownTypeError"})}}class be extends ee{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSolidityTypeError"})}}class ge extends ee{constructor({signature:e,type:t}){super(`Invalid ${t} signature.`,{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSignatureError"})}}class ve extends ee{constructor({signature:e}){super("Invalid struct signature.",{details:e,metaMessages:["No properties exist."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStructSignatureError"})}}class we extends ee{constructor({type:e}){super("Circular reference detected.",{metaMessages:[`Struct "${e}" is a circular reference.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CircularReferenceError"})}}class $e extends ee{constructor({current:e,depth:t}){super("Unbalanced parentheses.",{metaMessages:[`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],details:`Depth "${t}"`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParenthesisError"})}}const Pe=new Map([["address",{type:"address"}],["bool",{type:"bool"}],["bytes",{type:"bytes"}],["bytes32",{type:"bytes32"}],["int",{type:"int256"}],["int256",{type:"int256"}],["string",{type:"string"}],["uint",{type:"uint256"}],["uint8",{type:"uint8"}],["uint16",{type:"uint16"}],["uint24",{type:"uint24"}],["uint32",{type:"uint32"}],["uint64",{type:"uint64"}],["uint96",{type:"uint96"}],["uint112",{type:"uint112"}],["uint160",{type:"uint160"}],["uint192",{type:"uint192"}],["uint256",{type:"uint256"}],["address owner",{type:"address",name:"owner"}],["address to",{type:"address",name:"to"}],["bool approved",{type:"bool",name:"approved"}],["bytes _data",{type:"bytes",name:"_data"}],["bytes data",{type:"bytes",name:"data"}],["bytes signature",{type:"bytes",name:"signature"}],["bytes32 hash",{type:"bytes32",name:"hash"}],["bytes32 r",{type:"bytes32",name:"r"}],["bytes32 root",{type:"bytes32",name:"root"}],["bytes32 s",{type:"bytes32",name:"s"}],["string name",{type:"string",name:"name"}],["string symbol",{type:"string",name:"symbol"}],["string tokenURI",{type:"string",name:"tokenURI"}],["uint tokenId",{type:"uint256",name:"tokenId"}],["uint8 v",{type:"uint8",name:"v"}],["uint256 balance",{type:"uint256",name:"balance"}],["uint256 tokenId",{type:"uint256",name:"tokenId"}],["uint256 value",{type:"uint256",name:"value"}],["event:address indexed from",{type:"address",name:"from",indexed:!0}],["event:address indexed to",{type:"address",name:"to",indexed:!0}],["event:uint indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}],["event:uint256 indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}]]);const ze=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,xe=/^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,Ie=/^u?int$/;function Ae(e,t){const n=function(e,t){return t?`${t}:${e}`:e}(e,t?.type);if(Pe.has(n))return Pe.get(n);const i=le.test(e),s=ae(i?xe:ze,e);if(!s)throw new ne({param:e});if(s.name&&function(e){return"address"===e||"bool"===e||"function"===e||"string"===e||"tuple"===e||ce.test(e)||ue.test(e)||je.test(e)}(s.name))throw new ie({param:e,name:s.name});const r=s.name?{name:s.name}:{},o="indexed"===s.modifier?{indexed:!0}:{},a=t?.structs??{};let c,u={};if(i){c="tuple";const e=Oe(s.type),t=[],n=e.length;for(let i=0;i<n;i++)t.push(Ae(e[i],{structs:a}));u={components:t}}else if(s.type in a)c="tuple",u={components:a[s.type]};else if(Ie.test(s.type))c=`${s.type}256`;else if(c=s.type,"struct"!==t?.type&&!Be(c))throw new be({type:c});if(s.modifier){if(!t?.modifiers?.has?.(s.modifier))throw new se({param:e,type:t?.type,modifier:s.modifier});if(ye.has(s.modifier)&&!function(e,t){return t||"bytes"===e||"string"===e||"tuple"===e}(c,!!s.array))throw new re({param:e,type:t?.type,modifier:s.modifier})}const l={type:`${c}${s.array??""}`,...r,...o,...u};return Pe.set(n,l),l}function Oe(e,t=[],n="",i=0){const s=e.trim().length;for(let r=0;r<s;r++){const s=e[r],o=e.slice(r+1);switch(s){case",":return 0===i?Oe(o,[...t,n.trim()]):Oe(o,t,`${n}${s}`,i);case"(":return Oe(o,t,`${n}${s}`,i+1);case")":return Oe(o,t,`${n}${s}`,i-1);default:return Oe(o,t,`${n}${s}`,i)}}if(""===n)return t;if(0!==i)throw new $e({current:n,depth:i});return t.push(n.trim()),t}function Be(e){return"address"===e||"bool"===e||"function"===e||"string"===e||ce.test(e)||ue.test(e)}const je=/^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;const Se=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;function Ee(e,t,n=new Set){const i=[],s=e.length;for(let r=0;r<s;r++){const s=e[r];if(le.test(s.type))i.push(s);else{const e=ae(Se,s.type);if(!e?.type)throw new oe({abiParameter:s});const{array:r,type:o}=e;if(o in t){if(n.has(o))throw new we({type:o});i.push({...s,type:`tuple${r??""}`,components:Ee(t[o]??[],t,new Set([...n,o]))})}else{if(!Be(o))throw new me({type:o});i.push(s)}}}return i}function Me(e){const t=[];if("string"==typeof e){const n=Oe(e),i=n.length;for(let e=0;e<i;e++)t.push(Ae(n[e],{modifiers:fe}))}else{const n=function(e){const t={},n=e.length;for(let i=0;i<n;i++){const n=e[i];if(!pe(n))continue;const s=he(n);if(!s)throw new ge({signature:n,type:"struct"});const r=s.properties.split(";"),o=[],a=r.length;for(let e=0;e<a;e++){const t=r[e].trim();if(!t)continue;const n=Ae(t,{type:"struct"});o.push(n)}if(!o.length)throw new ve({signature:n});t[s.name]=o}const i={},s=Object.entries(t),r=s.length;for(let e=0;e<r;e++){const[n,r]=s[e];i[n]=Ee(r,t)}return i}(e),i=e.length;for(let s=0;s<i;s++){const i=e[s];if(pe(i))continue;const r=Oe(i),o=r.length;for(let e=0;e<o;e++)t.push(Ae(r[e],{modifiers:fe,structs:n}))}}if(0===t.length)throw new te({params:e});return t}class Ue extends r{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class Re extends r{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Le extends r{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const Ne={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Le({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new Re({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new Ue({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new Ue({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function Ce(e,{dir:t="left"}={}){let n="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<n.length-1&&"0"===n["left"===t?e:n.length-e-1].toString();e++)i++;return n="left"===t?n.slice(i):n.slice(0,n.length-i),"string"==typeof e?(1===n.length&&"right"===t&&(n=`${n}0`),`0x${n.length%2==1?`0${n}`:n}`):n}function Te(e,t={}){void 0!==t.size&&x(e,{size:t.size});return I(j(e,t),t)}function ke(e,t={}){let n=e;if(void 0!==t.size&&(x(n,{size:t.size}),n=Ce(n)),n.length>1||n[0]>1)throw new P(n);return Boolean(n[0])}function _e(e,t={}){void 0!==t.size&&x(e,{size:t.size});return A(j(e,t),t)}function Ve(e,t={}){let n=e;return void 0!==t.size&&(x(n,{size:t.size}),n=Ce(n,{dir:"right"})),(new TextDecoder).decode(n)}function De(e,t){const n="string"==typeof t?C(t):t,i=function(e,{recursiveReadLimit:t=8192}={}){const n=Object.create(Ne);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}(n);if(0===s(n)&&e.length>0)throw new c;if(s(t)&&s(t)<32)throw new a({data:"string"==typeof t?t:j(t),params:e,size:s(t)});let r=0;const o=[];for(let t=0;t<e.length;++t){const n=e[t];i.setPosition(r);const[s,a]=We(i,n,{staticPosition:0});r+=a,o.push(s)}return o}function We(e,t,{staticPosition:n}){const i=X(t.type);if(i){const[s,r]=i;return function(e,t,{length:n,staticPosition:i}){if(!n){const n=i+_e(e.readBytes(Fe)),s=n+Ze;e.setPosition(n);const r=_e(e.readBytes(Ze)),o=qe(t);let a=0;const c=[];for(let n=0;n<r;++n){e.setPosition(s+(o?32*n:a));const[i,r]=We(e,t,{staticPosition:s});a+=r,c.push(i)}return e.setPosition(i+32),[c,32]}if(qe(t)){const s=i+_e(e.readBytes(Fe)),r=[];for(let i=0;i<n;++i){e.setPosition(s+32*i);const[n]=We(e,t,{staticPosition:s});r.push(n)}return e.setPosition(i+32),[r,32]}let s=0;const r=[];for(let o=0;o<n;++o){const[n,o]=We(e,t,{staticPosition:i+s});s+=o,r.push(n)}return[r,s]}(e,{...t,type:r},{length:s,staticPosition:n})}if("tuple"===t.type)return function(e,t,{staticPosition:n}){const i=0===t.components.length||t.components.some((({name:e})=>!e)),s=i?[]:{};let r=0;if(qe(t)){const o=n+_e(e.readBytes(Fe));for(let n=0;n<t.components.length;++n){const a=t.components[n];e.setPosition(o+r);const[c,u]=We(e,a,{staticPosition:o});r+=u,s[i?n:a?.name]=c}return e.setPosition(n+32),[s,32]}for(let o=0;o<t.components.length;++o){const a=t.components[o],[c,u]=We(e,a,{staticPosition:n});s[i?o:a?.name]=c,r+=u}return[s,r]}(e,t,{staticPosition:n});if("address"===t.type)return function(e){const t=e.readBytes(32);return[D(j(Y(t,-20))),32]}(e);if("bool"===t.type)return function(e){return[ke(e.readBytes(32),{size:32}),32]}(e);if(t.type.startsWith("bytes"))return function(e,t,{staticPosition:n}){const[i,s]=t.type.split("bytes");if(!s){const t=_e(e.readBytes(32));e.setPosition(n+t);const i=_e(e.readBytes(32));if(0===i)return e.setPosition(n+32),["0x",32];const s=e.readBytes(i);return e.setPosition(n+32),[j(s),32]}const r=j(e.readBytes(Number.parseInt(s),32));return[r,32]}(e,t,{staticPosition:n});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,t){const n=t.type.startsWith("int"),i=Number.parseInt(t.type.split("int")[1]||"256"),s=e.readBytes(32);return[i>48?Te(s,{signed:n}):_e(s,{signed:n}),32]}(e,t);if("string"===t.type)return function(e,{staticPosition:t}){const n=_e(e.readBytes(32)),i=t+n;e.setPosition(i);const s=_e(e.readBytes(32));if(0===s)return e.setPosition(t+32),["",32];const r=e.readBytes(s,32),o=Ve(Ce(r));return e.setPosition(t+32),[o,32]}(e,{staticPosition:n});throw new h(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const Ze=32,Fe=32;function qe(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(qe);const n=X(e.type);return!(!n||!qe({...e,type:n[1]}))}const Ge="uint claimId, uint amount, uint8 errorCode";function Je(e,t){return H(Me(e),t)}function Ye(e,t){return{url:`https://mocki.io/v1/b26c3766-4f0f-4246-9888-fc670752bf4f?farcasterId=${e}&frameUrl=${t}`,method:"GET",headers:{"Content-Type":"application/json"},returnTextBody:!0}}function He(e,t){return{url:"https://api.airstack.xyz/graphql",method:"POST",headers:{Authorization:e,"Content-Type":"application/json"},body:JSON.stringify({query:`\n        query MyQuery {\n          Socials(\n            input: {filter: {dappName: {_eq: farcaster}, identity: {_eq: "${t}"}}, blockchain: ethereum}\n          ) {\n            Social {\n              userId\n            }\n          }\n        }\n      `}),returnTextBody:!0}}globalThis.scriptOutput=function(e,t){let n,i,s,r;try{[n,i,s,r]=function(e,t){return De(Me(e),t)}("uint claimId, address claimer, string frameUrl, uint farcasterId",e);let o=pink.batchHttpRequest([He(t,i),Ye(r.toString(),s)],1e4);if(200!==o[1].statusCode)return Je(Ge,[BigInt(n),0n,5n]);if(200!==o[0].statusCode)return Je(Ge,[BigInt(n),0n,4n]);{if(JSON.parse(o[0].body).data.Socials.Social[0].userId!==r.toString())return Je(Ge,[BigInt(n),0n,2n]);const e=JSON.parse(o[1].body).amount;return Je(Ge,0==e?[BigInt(n),0n,3n]:[BigInt(n),e,0n])}}catch(e){return console.info("Malformed request received"),Je(Ge,[BigInt(n),0n,1n])}}.apply(null,globalThis.scriptArgs)})();