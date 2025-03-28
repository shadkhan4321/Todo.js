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
// li.innerHTML=`${input.value}<button onclick="this.parentNode.remove()"class="delet-btn"><i class="fa-solid fa-trash"></i></button>`
//     // li.innerText=input.value;
//     ul.appendChild(li)
//     input.value=""
// })
{/* <button onclick="aditTask(this)"class="edit-icon"><i class="fa-solid fa-pencil"></i> </button>
<button onclick="deleteTask(this)"class="delet-btn"><i class="fa-solid fa-trash"></i></button> */}
// let input=document.querySelector("input")
// let button=document.querySelector("button")
// let ul=document.querySelector("ul")

// button.addEventListener("click",()=>{
//   if(input.value.trim()){
//     ul.innerHTML+=`
//     <li>
//     <span>${input.value}</span>
//     <div>
//     <button onclick="aditTask(this)"class="edit-icon"><i class="fa-solid fa-pencil"></i> </button>
//     <button onclick="deleteTask(this)"class="delet-btn"><i class="fa-solid fa-trash"></i></button>
//     </div>
//     </li>`
//   }
//     input.value=""
// })
// function deleteTask(text){
//     text.closest("li").remove();
// }

// function aditTask(text){
//     const span= text.closest("li").querySelector("span");
//     const newvalue=prompt("edit Task:",span.textContent);
//     if(newvalue!==null){
//         span.textContent=newvalue.trim()
//     }
// }
let input=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")

button.addEventListener("click",()=>{
    if(input.value.trim()){
        ul.innerHTML+=`
        <li><span>${input.value}
        </span>
        <div>
        <button onclick="aditTask(this)"class="edit-icon"><i class="fa-solid fa-pencil"></i> </button>
        <button onclick="deletTask(this)"class="delet-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        </li>`
        input.value=""
    }
})
function deletTask(btn){
    btn.closest("li").remove()
}

function aditTask(btn){
    const span=btn.closest("li").querySelector("span")
    const newvalue=prompt("Edit-task:",span.textContent);
    if(newvalue!==null){
        span.textContent=newvalue.trim();
    }
}