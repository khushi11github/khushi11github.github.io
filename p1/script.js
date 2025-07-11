let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
     user = found;
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const renderUserList = () => {
    let x= "<h4>Registered Users:</h4>";
    if(users.length==0){
        return "<p>No Users Registered</p>";

    }
    users.forEach(user => {
        x += `<p>${user.name} | ${user.email} | ${user.pass} | ${user.balance}</p>`;
    });
    
    return x;
};

const loginForm = () => {
  const str = `
    <div style='display:flex'>
    <div>
    <h3>Login Form</h3>
    <p id='errorTxt'></p>
    <p><input type='text' placeholder="Enter Email"id='txtEmail'></p>
    <p><input type='password' placeholder="Enter Password" id='txtPass'></p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    </div>
    <div>
     ${renderUserList()}
    </div>
    </div>
    `;
  root.innerHTML = str;
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
    balance:1000,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p><input type='text' placeholder=" Enter name" id='txtName'></p>
    <p><input type='text' placeholder="Enter Email" id='txtEmail'></p>
    <p><input type='password' placeholder="Enter Password" id='txtPass'></p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome, ${user.name}</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    <p>TOTAL BALANCE: ₹<span id='balance'>${user.balance}</span></p>
    <input type='text' id='txtAmount' placeholder='Enter Amount'>
    <p><button onclick='deposit()'>Deposit</button></p>
    <p><button onclick='withdraw()'>Withdraw</button></p>
    </div>`;
  root.innerHTML = str;
};

const deposit=()=>{
    let amount = parseInt(document.getElementById("txtAmount").value);
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }
    user.balance += amount;
    document.getElementById("balance").innerText = user.balance;
    document.getElementById("txtAmount").value = "";
}

const withdraw=()=>{
    let amount = parseInt(document.getElementById("txtAmount").value);
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }
    if(user.balance < amount){
        alert("Insufficient balance");
        return;
    }
    user.balance -= amount;
    document.getElementById("balance").innerText = user.balance;
    document.getElementById("txtAmount").value = "";
}


loginForm()