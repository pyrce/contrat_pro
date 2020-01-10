window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });


  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 3s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
 document.getElementById("bar").onclick=()=>{
   console.log("click")
    document.getElementById("menu").classList.add("show");
  }

  async function SavePhoto(inp) 
{
  console.log("sauvegarde")
  console.log(inp)
    let user = { name:'john', age:34 };
    let formData = new FormData();
    let photo = inp.files[0];      
         console.log(photo);
    formData.append("photo", photo);
   // formData.append("user", JSON.stringify(user));  
    
    try {
       let r = await fetch('./sounds/', {method: "POST", body: formData}); 
       console.log('HTTP response code:',r.status); 
    } catch(e) {
       console.log('Huston we have problem...:', e);
    }
    
}