const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting
      event.preventDefault();

      // Validate Name
      const nameInput = document.querySelector(".contact__form-el--name");
      const nameValue = nameInput.value.trim();
      if (nameValue === "") {
        alert("Please enter your name.");
        return;
      }

      // Validate Email
      const emailInput = document.querySelector(".contact__form-el--email");
      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Validate Message
      const messageInput = document.querySelector(".contact__form-el--message");
      const messageValue = messageInput.value.trim();
      if (messageValue === "") {
        alert("Please enter your message.");
        return;
      }

      // If all validations pass, you can submit the form or perform other actions
      alert("Form submitted successfully!");
      // Uncomment the line below to submit the form programmatically
      // form.submit();
    });

    // Email validation function
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });