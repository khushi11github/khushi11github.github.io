let users = [];

const validateUser = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const found = users.find(value => value.email === email && value.password === password);
    if (found) {

        showHome();
    } else {
        document.getElementById("error").innerHTML = "Access Denied";
    }
}

const loginForm = () => {
    const str = `<div>
         <h3>Login Form</h3>
         <div id="error" style="color:red"></div>
         <input id="email" name="email" type="email" placeholder="Email"><br><br>
         <input id="password" name="password" type="password" placeholder="Password"><br>
         <p><button onclick='validateUser()'>Submit</button></p>
         <p><button onclick='RegisterForm()'>Create Account</button></p>
    `;
    root.innerHTML = str + "</div>";
}

const saveUser = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    users.push({ name, email, password });
    loginForm();
}

const RegisterForm = () => {
    const str = `
    <div>
        <h3>Register Form</h3>
        <input id="name" name="name" type="text" placeholder="Name"><br><br>
        <input id="email" name="email" type="email" placeholder="Email"><br><br>
        <input id="password" name="password" type="password" placeholder="Password"><br><br>
        <p><button onclick="saveUser()">Submit</button></p>
        <p>Already a member? <button onclick="loginForm()">Login</button></p>
    `;
    root.innerHTML = str + '</div>';
}

const showHome = () => {
    const str = `<div>
        <h1>Welcome to Home Page</h1>
        <p><button onclick="loginForm()">Logout</button></p>
    `;
    root.innerHTML = str + "</div>";
}


// loginForm();