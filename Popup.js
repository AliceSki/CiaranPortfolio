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

 function showResult(choice) {
      const responseDiv = document.getElementById('response');
      if (choice === 'yes') {
        window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=ciaran@cdoherty.co.uk';
      } else {
        responseDiv.innerHTML = '<h2>Thanks for stopping by! I am currently unwilling to share my portfolio!</h2>';
      }
    }

const modal1 = document.querySelector('.modal');

    window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    modal1.classList.add("scrolled");
  } else {
    modal1.classList.remove("scrolled");
  }
});