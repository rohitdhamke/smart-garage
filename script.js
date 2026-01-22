
    let signupForm = document.getElementById("signupForm");

if (signupForm) {
    
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("All feilds are required❌");
            return;
        }

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration Successful✅")
        window.location.href = "home.html";
    });

}


let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let storeUser = JSON.parse(localStorage.getItem("user"));

        if (!storeUser) {
            alert("No user found. Please register ❌");
            return;
        }

        if (email === storeUser.email && password === storeUser.password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login Successful✅");
            window.location.href="home.html"
        }

    })
}


function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    window.location.href="index.html"
}