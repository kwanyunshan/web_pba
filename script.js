$(document).on("pagecreate", function () {
  // form validation
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    if (name === "" || email === "" || phone === "") {
      falert("Please fill in required fields!");
      return;
    }

    if (!email.includes("@")) {
      falert("Invalid email format!");
      return;
    }

    if (phone.length < 10) {
      falert("Invalid phone number!");
      return;
    }

    alert("Form submitted successfully!");
  });
});
