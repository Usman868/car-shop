// Login page functions
var logininfo = false
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var loginBtn = document.getElementById("loginBtn")
var registerBtn = document.getElementById("registerBtn")
var users = []

function register() {
    x.style.left = "-400px";
    y.style.left = "55px";
    z.style.left = "110px";
    setTimeout(function () {
        registerBtn.style.color = "#fff"
        loginBtn.style.color = "black"
    }, 150
    )
}

function login() {
    x.style.left = "55px";
    y.style.left = "450px";
    z.style.left = "0";
    setTimeout(function () {
        loginBtn.style.color = "#fff"
        registerBtn.style.color = "black"
    }, 150
    )
}

function registerBtn1() {
    var userName = document.getElementById("username")
    var userEmail = document.getElementById("user-email")
    var userPasword = document.getElementById("user-pasword")
    if (userName.value && userEmail.value && userPasword.value) {
        if ((userEmail.value).slice(-10) == "@gmail.com") {
            var userinfo = {
                name: userName.value,
                email: userEmail.value,
                password: userPasword.value,
            };
            users.push(userinfo)
            localStorage.setItem("user", JSON.stringify(users));

            userName.value = "";
            userEmail.value = "";
            userPasword.value = "";
            console.log(localStorage.getItem("user"))
        }
        else {
            alert("Please fill the email correctly")
        }
    }
    else {
        alert("Please fill Them all")
    }

}

function loginBtn1(event) {
    event.preventDefault();
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-pasword").value;
    var users = JSON.parse(localStorage.getItem("user"))
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            alert("correct email or password!");
            logininfo = true
            localStorage.setItem("login", JSON.stringify(logininfo))
            window.location.href = "index.html"
            return;
        }
    }
    alert("incorrect email or password!");
}
