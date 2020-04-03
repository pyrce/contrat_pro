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
      //console.log(sounds[index].currentTime);
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

  var liste = [];
  var is_record = false;
  document.querySelector("#record").onclick = () => {
    var liste = [];

    is_record = true;
    document.querySelectorAll(".pads div").forEach((pad, index) => {
      pad.addEventListener(
        "click",
        function() {
          if (is_record) {
            var temps = 0;

            /* liste.push({
            son: sounds[index],
            temps: new Date()
          })*/
          }
        },
        false
      );
    });
  };
  $("#reset").on("click", () => {
    console.log(liste);
    liste = [];
  });
  document.querySelector("#stop").onclick = () => {
    is_record = false;
    console.log(liste);
  };
  document.querySelector("#play").onclick = () => {
    let n = liste.length;

    for (let i = 0; i < n; i++) {
      let delai = 0;
      if (i != 0) delai = liste[i].temps - liste[i - 1].temps;
      console.log(delai);
      setTimeout(function timer() {
        liste[i].son.play();
      }, i * delai);
    }
  };
});
