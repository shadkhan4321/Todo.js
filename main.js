// let input=document.querySelector("input")
// let button=document.querySelector("button")
// let ul=document.querySelector("ul")

// button.addEventListener("click",()=>{
//      let li=document.createElement("li");
//      li.innerText=input.value;
//      ul.appendChild(li)
    
// })

// let input=document.querySelector("input")
// let button=document.querySelector("button")
// let ul=document.querySelector("ul")

// button.addEventListener("click",()=>{

    //         let li=document.createElement("li");
    //         li.innerText=input.value;
    //         input.value=""
    //         ul.appendChild(li)
// 

//    

//         
//     
    
// })

// let input=document.querySelector("input")
// let button=document.querySelector("button")
// let ul=document.querySelector("ul")

// button.addEventListener("click",()=>{
//     let li=document.createElement("li")
//     li.innerText=input.value;
//     ul.appendChild(li)
//     input.value=""
// })
let input=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")

button.addEventListener("click",()=>{
    let li=document.createElement("li")
    li.innerHTML=`${input.value}<button onclick="this.parentNode.remove()"class="delet-btn"><i class="fa-solid fa-trash"></i></button>`
    ul.appendChild(li)
    input.value=""
})