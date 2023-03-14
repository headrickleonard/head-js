
let back=document.getElementById("left")
let div=document.querySelector(".media")
back.addEventListener("click",e=>{
  window.history.back()
})

window.onscroll=e=>{
  div.scrollTop=div.scrollHeight
}


//alert(window.innerHeight,window.innerWidth)

const bd=document.querySelector(".container")
