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

let path = window.location.pathname;

// Remove trailing slash
if (path.endsWith("/")) {
  path = path.slice(0, -1);
}

let currentPath = path.split("/").pop() || "index";

// Normalize to .html
if (!currentPath.includes(".")) {
  currentPath = currentPath + ".html";
}

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(btn => {
  const page = btn.dataset.page;

  // navigation when clicked
  btn.addEventListener("click", () => {
    window.location.href = "/" + page;
  });

  // highlight active
  if (page === currentPath) {
    btn.classList.add("active");
  }
});








