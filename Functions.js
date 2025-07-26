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


 document.addEventListener("DOMContentLoaded", () => {
    const currentURL = window.location.href.toLowerCase();
    const navButtons = document.querySelectorAll(".twonav nav button");

    navButtons.forEach(button => {
      const onClickAttr = button.getAttribute("onclick");
      if (!onClickAttr) return;

      // Grab the filename from the onclick
      const match = onClickAttr.match(/'([^']+)'/);
      if (!match) return;

      const buttonPage = match[1].toLowerCase();

      // Check if the current URL contains this button's page
      if (currentURL.includes(buttonPage)) {
        button.classList.add("active");
      }
    });
  });

