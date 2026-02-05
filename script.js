
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
        window.location.href = "login.html";
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


function calculatePrice() {
    let total = 0;
    let services = document.querySelectorAll('input[type="checkbox"]');

    services.forEach(service => {
        if (service.checked) {
            total += Number(service.value);
        }
    });

    document.getElementById("result").innerText =
        "Total: ₹" + total;
}


document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault(); 


    let name = document.getElementById("u-name").value;
    let carType = document.getElementById("cartype").value;
    let serviceType = document.getElementById("servicetype").value;

    if (carType === "" || serviceType === "") {
        alert("❌ Please select car type and service type");
        return;
    }


    alert(
        "✅ Booking Confirmed!" 
    );

    document.getElementById("book-result").innerHTML = `
        <div class="confirmation">
            <h2>✅ Booking Confirmed</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Car Type:</strong> ${carType}</p>
            <p><strong>Service:</strong> ${serviceType}</p>
        </div>
    `;

    document.getElementById("booking-form").reset();
});






function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const toggleBtn = document.querySelector(".menu-toggle");

    navLinks.classList.toggle("active");



    if (navLinks.classList.contains("active")) {
        toggleBtn.innerHTML = "✕";
    } else {
        toggleBtn.innerHTML = "☰";
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const navLinks = document.querySelector(".nav-links");
    const toggleBtn = document.querySelector(".menu-toggle");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggleBtn.innerHTML = "☰";
        });
    });
});