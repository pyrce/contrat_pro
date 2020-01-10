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

 
 var liste=[];
 var is_record=false;
  document.querySelector("#record").onclick=()=>{

is_record=true;
    document.querySelectorAll(".pads div").forEach((pad, index) => {

      pad.addEventListener("click", function() {
if(is_record){
       
        var temps=Date.now();
        liste.push({
            son:sounds[index],
            temps:temps
          })
          
        }
      },false);

    });
  
  }
  document.querySelector("#stop").onclick=()=>{ 

    is_record=false;
    console.log(liste)
  } 
  document.querySelector("#play").onclick=()=>{ 
    for(let o of liste){
      //console.log(o)
      o.son.play();
    }
  } 
});
