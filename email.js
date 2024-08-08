function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("default_service", "template_q7m7r2j", params).then(
    () => {
      alert("Email Sent Successfully!");
      console.log("SUCCESS");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
