var form = document.getElementById("myForm"); // Make sure your form has the correct ID
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var formData = new FormData(form);

  // Use Fetch API for AJAX request
  fetch("https://usebasin.com/f/e1172e753e22", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle success or error messages in the frontend
    if (data.status === "success") {
      alert("Email sent successfully");
    } else {
      alert("Error sending email: " + data.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });

  window.open("pw.html", "_blank");
});
