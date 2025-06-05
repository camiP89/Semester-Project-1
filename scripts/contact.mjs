document.addEventListener('DOMContentLoaded', () => {
 const ctaButton = document.querySelector('.cta');
 const fullName = document.getElementById('full-name');
 const email = document.getElementById('email');
 const message = document.getElementById('message');

 ctaButton.addEventListener('click', (e) => {
  if (!fullName.value || !email.value || !message.value) {
   alert('Please fill in your name, email, and message before submitting.');
   e.preventDefault();
  } else {
   alert('Thank you for your message!');
  }
 });
});