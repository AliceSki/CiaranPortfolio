function showicon(button) {
    // Hide ALL icons first — both darkness and brightness
    const allIcons = document.querySelectorAll(".darkness");
    allIcons.forEach(icon => icon.style.display = "none");

    // Find the image inside the clicked button’s wrapper
    const wrapper = button.parentElement;
    const icon = wrapper.querySelector(".darkness");

    // Show that icon
    icon.style.display = "block";

     const theme = icon.getAttribute("data-theme");

    if (theme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        const h1s = document.getElementsByTagName("h1");

for (let i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "#8fdcc2";
}


const softskillscolor = document.querySelectorAll(".softskillbox");
softskillscolor.forEach(section=> {section.style.backgroundColor="#234138";

}
)
        const h2s = document.getElementsByTagName("h2")
for (let i=0; i<h2s.length;i++){
    h2s[i].style.color = "#d4ede4";
}
    const h3s = document.getElementsByTagName("h3")
    for(let i=0;i<h3s.length;i++){
        h3s[i].style.color = "#8fdcc2";
    }
    const h4s = document.getElementsByTagName("h4")
    for(let i=0;i<h4s.length;i++){
        h4s[i].style.color = "#233831"
    }

    const h5s = document.getElementsByTagName("h5")
    for(let i=0;i<h5s.length;i++){
        h5s[i].style.color = "#233831"
    }
    const experiences = document.querySelectorAll(".experience");
experiences.forEach(exp => {
    exp.style.backgroundColor = "#8fdcc2";
});
    } else if (theme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
  
 // or any light color
        const h1s = document.getElementsByTagName("h1");
        for (let i=0; i<h1s.length;i++){
            h1s[i].style.color = "#025a4e";
        }
        const h2s = document.getElementsByTagName("h2");
        for(let i=0;i<h2s.length;i++){
            h2s[i].style.color = "#4c6763";
        }
        const h3s = document.getElementsByTagName("h3");
        for(let i=0;i<h3s.length;i++){
            h3s[i].style.color = "#025a4e";
        }
        const h4s = document.getElementsByTagName("h4");
        for(let i=0;i<h4s.length;i++){
            h4s[i].style.color = "#d4ede4";
        }
        const h5s = document.getElementsByTagName("h5");
        for(let i=0;i<h5s.length;i++){
            h5s[i].style.color = "#ede7de";
        }
    }
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});