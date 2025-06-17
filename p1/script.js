const loginForm = ()=>{
    const str = `<div>
         <h3>Login Form </h3>
         <input name ="email" type="email" placeholder="email"><br><br>
         <input name ="password" type="password" placeholder="password"><br>
         <p><button onClick='showHome()'>submit</button></p>

        <p><button onClick='RegisterForm()'>Create Account</button></p>

    `
    root.innerHTML = str+ "</div>";
}


const RegisterForm=()=>{
    const str=`
    <div>
    <h3>Register Form</h3>
    <input name="name" type="text" placeholder="Name"><br><br>
    <input name="email" type="email" placeholder="Email"><br><br>
    <input name="password" type="password" placeholder="Password"><br><br>

    <p><button onclick="loginForm()">Submit</button></p>
    <p>Already a member? <button onclick="loginForm()">Login</button></p>
    `
    root.innerHTML=str+'</div>';
}
const showHome = ()=>{
    const str = `<div>
    <h1>Welcome to Home Page</h1>
    <p><button onClick="loginForm()">Logout</button></p>
    `
    root.innerHTML = str+"</div>";


}
