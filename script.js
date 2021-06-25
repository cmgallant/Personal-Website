function menuToggle() {
  let pathname = window.location.pathname;
  let pagename = pathname.substring(pathname.lastIndexOf('/') + 1);

  if(pagename === 'index.html'){
    let menuAttributes = document.getElementById("menuList");
    let buttonAttributes = document.getElementById("menuButton");

    if(menuAttributes.style.visibility === "hidden"){
        menuAttributes.style.visibility = "visible";
        buttonAttributes.style.transform = "rotate(270deg) scale(.7)";
    } else {
        menuAttributes.style.visibility = "hidden";
        buttonAttributes.style.transform = "rotate(90deg) scale(.7)";
    }
  } else if(pagename === 'projects.html') {
    let menuAttributes = document.getElementById("menuListProj");
    let buttonAttributes = document.getElementById("menuButtonProj");

    if(menuAttributes.style.visibility === "hidden"){
        menuAttributes.style.visibility = "visible";
        buttonAttributes.style.transform = "rotate(270deg) scale(.7)";
    } else {
        menuAttributes.style.visibility = "hidden";
        buttonAttributes.style.transform = "rotate(90deg) scale(.7)";
    }
  };
};

function opacityFade(seconds, endValue, objectID){
  let opacityAttribute = document.getElementById(objectID).style.opacity;
  let rate = (Math.abs(opacityAttribute - endValue)) / seconds;
  for(i = 0; i = endValue; i++){
    opacityAttribute = opacityAttribute + rate;
  }
}
