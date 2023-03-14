
let send=document.querySelector(".sendPad")

message=document.getElementById("textInput")
let arrow=document.getElementById("left")
let board=document.querySelector(".messages")

let optionList=document.querySelector(".options")
let option=document.getElementById("dots")

let microphone=document.querySelector(".mic-pad")
let record=document.querySelector(".recording")
let release=document.querySelector(".releaseVoice")
let innerTime=document.getElementById("txt")
let sharePanel=document.querySelector(".share-board")
let panelDrawer=document.getElementById("emoji")
let profile=document.getElementById("details")
profile.addEventListener("click",e=>{
  window.location.assign("/profileDetails.html")
})
let reactions=document.querySelector(".reactions")
option.addEventListener("click",e=>{
  optionList.classList.toggle("options-shift")
})


board.addEventListener("click",e=>{
  optionList.classList.remove("options-shift")
})

left.addEventListener("click",e=>{
  window.history.back()
  //window.location.assign("/index.html")
})

//function to send messages

send.addEventListener("click",writeLn)



//click sound function

function clickSound() {
  var audio = new AudioContext()
  var sound = audio.createOscillator()
  sound.connect(audio.destination)
  sound.type = "sine"
  sound.start()
  setTimeout(e => {
    sound.stop()
  }, 50)
}

//counter timer while recording voice note
let stopWatch,y=0,x,z=0
function timer(){
stopWatch=setInterval(e=>{
  innerTime.innerText=y
  y++
  if(y==60){
    x=y/60
    z++
    y=0
    innerTime.insertAdjacentText("beforebegin",`${z}:`)
  }
},1*1000)
y=0
}


  let date=new Date()
  let sec=date.getSeconds().toString()
  let min=date.getMinutes().toString()
  let hr=date.getHours().toString()
  let dy=date.getDay().toString()
  let realNow=hr+":"+min+":"+sec


microphone.addEventListener("pointerover",e=>{
  record.classList.add("recording-shift")
  release.classList.add("releaseVoice-shift")
  microphone.classList.add("mic-pad-shift")
  timer()
})
microphone.addEventListener("pointerleave",e=>{
  clearInterval(stopWatch)
  record.classList.remove("recording-shift")
  release.classList.remove("releaseVoice-shift")
  microphone.classList.remove("mic-pad-shift")
  clickSound()
  voiceNote()

})
panelDrawer.addEventListener("click",e=>{
  sharePanel.classList.add("share-board-shift")
})
board.addEventListener("pointerover",e=>{
  sharePanel.classList.remove("share-board-shift")
})


function writeLn(){
  let txt=document.createElement("div")
  txt.setAttribute("id","inboxSms")
  txt.setAttribute("class","inboxSms")
  txt.innerHTML=message.value
  setTimeout(e=>{board.append(txt)},1000)
  board.scrollTop = board.scrollHeight;
  
  message.value=""
  //operations bar
  let operationsBar=document.querySelector(".operations")
txt.addEventListener("click",e=>{
  operationsBar.classList.add("operations-shift")
  let back=document.getElementById("back")
  back.onclick=e=>{
    operationsBar.classList.remove("operations-shift")
  }
  txt.classList.toggle("selectionTheme")
})
}
//function to send pictures
function picture(){
  let pic=document.createElement("input")
  pic.setAttribute("type",'image')
  pic.setAttribute("class","myphoto")
  pic.src="/cat.jpg"
  board.append(pic)
  pic.onfocus=e=>{
    pic.classList.toggle("myphoto-selection")
  }
  
  
}
//photo button from sharepanel when clicked
let photo=document.getElementById("photo")
photo.onclick=picture
//function to send voice messages
function voiceNote(){
  let voice=document.createElement("audio")
  voice.setAttribute("controls", true)
  voice.setAttribute('id', "voice")
  board.append(voice)
}

/*let voiceFile=document.getElementById("voiceFile")
note.addEventListener('click', function(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  note.src = url;
})*/
/*microphone.onpointerover=e=>{
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });
    
    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
      let aud=document.createElement("audio")
      aud.setAttribute("controls")
      aud.src="audio"
      board.append(aud)
      
    });
    
    setTimeout(() => {
    mediaRecorder.stop();
    }, 3000);
    });
}
*/

//let items=document.querySelectorAll(".items")
/*for(let i=0;i<items.length;i++){
  items[i].addEventListener("click",e=>{
    items[i].classList.toggle("items-effect")
  })
  }
  */

//operations bar ie,delete ,archive etc



