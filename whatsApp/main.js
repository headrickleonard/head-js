
window.addEventListener("load",e=>{
let chats=document.getElementById("chats")

let calls=document.getElementById("calls")
let main=document.querySelector("chat-list")
let btn=document.querySelector(".contact")
let btn1=document.querySelector(".news")
let btn2=document.querySelector(".account")
let list=document.getElementsByTagName("li")
let fab=document.querySelector(".fab")
let drawer=document.getElementById("dots")
let panel=document.querySelector(".options")
let leftArrow=document.getElementById("left")

fab.addEventListener("click",e=>{
  btn.classList.toggle("shift")
  btn1.classList.toggle("shift1")
  btn2.classList.toggle("shift2")
  fab.classList.toggle("fab-transform")
})
chats.addEventListener("click",e=>{
  chats.classList.toggle("underlineTab")
})

for(let i=0;i<list.length;i++){
  list[i].addEventListener("click",e=>{
    window.location.assign("/chat.html")
  })
}


drawer.addEventListener("click",e=>{
  panel.classList.toggle("options-shift")
})

leftArrow.addEventListener("click",e=>{
  panel.classList.toggle("options-shift")
})

})
let statuses=document.querySelector("status")
let updates=document.getElementById("status-tab")
updates.addEventListener("click",e=>{
  statuses.classList.toggle("status-shift")
})


