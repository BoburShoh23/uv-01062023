// function subString(str,from,to){
//     value = ""
//     if(from>=0 && to>=0) for(let i=from; i<to; i++) str[i] != undefined ? value+=str[i] : ""
//     return value
// }
// console.log(subString("Nuriddinov",1,7))



// function slice(str,from,to){
//     value = ""
//     if(from<0 && to<0) for(let i=str.length+from; i<str.length+to; i++) str[i] != undefined ? value+=str[i] : ""
//     else for(let i=from; i<to; i++) str[i] != undefined ? value+=str[i] : ""  
//     return value
// }
// console.log(slice("Nuriddinov",-6,-2))



// function substr(str,from,count){
//     value = ""
//     if(from>=0 && count>=0) for(let i=from; i<from+count; i++) str[i] != undefined ? value+=str[i] : ""
//     return value
// }
// console.log(substr("Nuriddinov",2,6))



// function indexOf(str,str2){
//     let value = 0
//     for(let i=0; i<str.length; i++) 
//     if(str[i] === str2){
//         value=i
//         i=str.length;
//     }
//     return value
// }
// console.log(indexOf("Nuriddinov","d"))



// function includes(str,str2){
//     let value = false
//     for(let i=0; i<str.length; i++) 
//     str[i] === str2 ? value=true : ""
//     return value
// }   
// console.log(includes("Nuriddinov","u"))



// function startsWith(str,str2){
//     if(str[0] === str2) return "true"; else return "false"
// }   
// console.log(startsWith("Nuriddinov","N"))



// function endsWith(str,str2){
//     if(str[str.length-1] === str2) return "true"; else return "false"
// }   
// console.log(endsWith("Nuriddinov","v"))



function repeat(str,num){
    let value =""
    for(let i=0; i<+num; i++) value+=str
    return value
}   
console.log(repeat("Nuriddinov",5))
