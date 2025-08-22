const modal = document.getElementById('contactModal');
const content = document.getElementById('contactContent');
const btn = document.getElementById('ContactBtn');

btn.addEventListener('click', () => {
  if (modal.classList.contains('show')) {
    // Close the modal
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  } else {
    // Open the modal and fetch content
    fetch('Contact.html')
      .then(res => res.text())
      .then(html => {
        content.innerHTML = html;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
      });
  }
});

// Close on clicking outside
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
});


function closeModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}


 function showResult(choice) {
      const responseDiv = document.getElementById('response');
      if (choice === 'Portfolio') {
        const BotText = document.getElementById("BotMessage");
        BotText.innerHTML = '<h2 class="BotGreeting" id="PortfolioButton" onclick="window.location.href=\'https://mail.google.com/mail/?view=cm&fs=1&to=ciaran@cdoherty.co.uk\'">Get My Portfolio</h2>';
        const UserText = document.getElementById("UserMessage");
        UserText.innerHTML = '<h3 class="UserGreeting">We\'d like to hire you</h3>'
      }
      
      else if(choice=='Case') {
        const BotText = document.getElementById("BotMessage");
        BotText.innerHTML = '<h2 class="BotGreeting" id="PortfolioButton" onclick="window.location.href=\'https://mail.google.com/mail/?view=cm&fs=1&to=ciaran@cdoherty.co.uk\'">Some real world cases</h2>';
        const UserText = document.getElementById("UserMessage");
        UserText.innerHTML = '<h3 class="UserGreeting">Do you have any real world case studies?</h3>'
      }

      else if(choice=='Hello!'){
        const BotText = document.getElementById("BotMessage");
          BotText.innerHTML = '<h2 class="BotGreeting">Hello!Have a great day!</h2>';
          const UserText = document.getElementById("UserMessage");
          UserText.innerHTML = '<h3 class="UserGreeting">Just saying hello!</h3>';
      }

      else if(choice=='Currentprojects'){
        const BotText = document.getElementById("BotMessage");
        BotText.innerHTML = '<h2 class="BotGreeting" onclick="window.location.href=\'https://blog.cdoherty.co.uk/\'">Here are some of my projects</h2>';
      const UserText = document.getElementById("UserMessage");
      UserText.innerHTML = '<h3 class="UserGreeting">What are you currently working on?</h3>'
      }
    }

    function hidemenu() {
      document.getElementById("Menu").style.display = "none";
    }

    function showmenu(){
      const container = document.getElementById("MenuBox1");
        const menu = document.getElementById("Menu");
        container.appendChild(menu);
        menu.style.display="block";
    }

const modal1 = document.querySelector('.modal');

    window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    modal1.classList.add("scrolled");
  } else {
    modal1.classList.remove("scrolled");
  }
});

function handleclick1(){
  hidemenu();
  showResult('Hello!');
  setTimeout(showmenu, 1000); 
}

function handleclick2(){
  hidemenu();
  showResult('Portfolio');
  setTimeout(showmenu, 1000); 
}

function handleclick3(){
  hidemenu();
  showResult('Currentprojects');
  setTimeout(showmenu, 1000); 
}

function handleclick4(){
  hidemenu();
  showResult('Case');
  setTimeout(showmenu, 1000); 
}
