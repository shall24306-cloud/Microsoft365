function startDemo(){
  let sound = document.getElementById("sound");

  sound.currentTime = 0;
  sound.muted = false;

  sound.play().then(()=>{
    console.log("Sound playing");
  }).catch((e)=>{
    console.log("Error:", e);
  });

  document.getElementById("overlay").style.display="block";

  if(document.documentElement.requestFullscreen){
    document.documentElement.requestFullscreen();
  }
}
