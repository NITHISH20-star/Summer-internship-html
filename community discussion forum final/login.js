document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".login-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        alert("Login Successful!");

        window.location.href = "discussion.html";
    });

});