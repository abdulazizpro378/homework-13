window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.opacity = 1;
    } else {
      backtop.style.opacity = 0;
    }
  }







  const root = document.querySelector(":root");
const btnImage = document.getElementById("dark-light").firstElementChild;

const setVariables = (vars) =>
  Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));

const myLightColors = {
  "--main-color": "#FFFFFF",
  "--nav-color": " #57B8FF",
  "--home-color": "#030303",
  "--rgb-color": "rgba(223, 223, 223, 0.8)"
};

const myDarkColors = {
  "--main-color": "#030303",
  "--button-color": "#0080ff",
  "--home-color": "#fff",
  "--rgb-color":"#030303"
  
};

const btn = document.getElementById("dark-light");

btn.addEventListener("click", (e) => {
  if (btnImage.getAttribute("data-type") === "light") {
    btnImage.src = "images/dark.svg";
    setVariables(myDarkColors);
    btnImage.setAttribute("data-type", "dark");
  } else {
    btnImage.src = "images/light.svg";
    setVariables(myLightColors);
    btnImage.setAttribute("data-type", "light");
  }
});



