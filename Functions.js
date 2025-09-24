let darktheme = localStorage.getItem('darktheme')
const themeSwitch = document.getElementById('theme-switch')


const enabledarktheme = () => {
    document.body.classList.remove("lighttheme");
    document.body.classList.add("darktheme");
    localStorage.setItem('darktheme','active');
}

const disabledarktheme = () => {
    document.body.classList.remove("darktheme");
    document.body.classList.add("lighttheme");
    localStorage.removeItem("darktheme");
}

    if (darktheme == "active") {
        enabledarktheme()
    } else {
        disabledarktheme()

    }



    themeSwitch.addEventListener("click", () =>  {
        darktheme = localStorage.getItem('darktheme')
        darktheme !== "active" ? enabledarktheme(): disabledarktheme()
    })

const nav = document.querySelector(".twonav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

let currentPath = window.location.pathname.split("/").pop();

// default to index if empty
if (!currentPath) currentPath = "index.html";

// strip off the .html part (if it’s there)
const currentName = currentPath.replace(".html", "");

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(btn => {
  const target = btn.getAttribute("onclick");

  if (target) {
    // also strip .html from the onclick string
    const targetName = target.replace(".html", "");

    if (targetName.includes(currentName)) {
      btn.classList.add("active");
    }
  }
});





