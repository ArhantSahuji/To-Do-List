// let arr=[];
// let inp=document.querySelector("input");
// let add=document.querySelector(".add");
// let del=document.querySelector(".delete");
// add.addEventListener("click",function(){
//     if(inp.value!=""){
//         arr.push(inp.value);
//         console.log(arr);
//         let newli=document.createElement("li");
//         let unl=document.querySelector("ul");
//         newli.innerText=inp.value;
//         unl.append(newli);//append also works
//         inp.value = "";
//     }
// });
// inp.addEventListener("keydown",function(event){
//         // console.log(event);
//     if(event.key=="Enter"){
//         if(inp.value!=""){
//             arr.push(inp.value);
//             let newli=document.createElement("li");
//             let unl=document.querySelector("ul");
//             newli.innerText=inp.value;
//             unl.append(newli);
//             console.log(arr);
//             inp.value = "";
//         }
//     }
//     if(event.key=="Delete"){
//         if(inp.value!=""){
//             let n=arr.indexOf(inp.value);
//             let unl=document.querySelectorAll("li");
//             unl[n].remove();
//             arr.splice(n,1);
//             console.log(arr);
//             inp.value ="";
//         }
//     }
// });
// del.addEventListener("click",function(){
//     if(inp.value!=""){
//         let n=arr.indexOf(inp.value);
//         let unl=document.querySelectorAll("li");
//         unl[n].remove();
//         arr.splice(n,1);
//         console.log(arr);
//         inp.value ="";
        

//     }
// })
let inp=document.querySelector("input");
let add=document.querySelector(".add");
add.addEventListener("click",function(){
    let newli=document.createElement("li");
    newli.innerText=inp.value;
    let ull=document.querySelector("ul");
    ull.appendChild(newli);
    let dlb=document.createElement("button");
    dlb.innerText="delete";
    // newli.append(dlb);
    ull.append(dlb);
    inp.value="";
    dlb.addEventListener("click",function(){
        newli.remove();
        this.remove();
    })
    
})
inp.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        let newli=document.createElement("li");
        newli.innerText=inp.value;
        let ull=document.querySelector("ul");
        ull.append(newli);
        let dlb=document.createElement("button");
        dlb.innerText="delete";
        dlb.classList.add("del");
        ull.appendChild(dlb);
        dlb.addEventListener("click",function(){
            newli.remove();
            this.remove();
        })
        inp.value="";
    }
});




