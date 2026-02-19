(function () {
  emailjs.init("s-TYF7k1X1l-QHZ5g");
})();

const form = document.getElementById("contact");
const button = document.getElementById("form-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.innerText = "Sending...";
  button.disabled = true;

  emailjs.sendForm("service_w4giqla", "template_x4wr5do", this)
    .then(() => {
      button.innerText = "Message Sent!";
      form.reset();
      button.disabled = false;
    })
    .catch((error) => {
      console.error(error);
      button.innerText = "Try Again";
      button.disabled = false;
    });
});
