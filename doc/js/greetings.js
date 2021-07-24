//DOM Element access
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//Constant
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Submit event 
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  setUserName(username);
  paintGreetings(username);
}

//DOM painting
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


//LocalStorage getter/setter
function setUserName(value){
    localStorage.setItem(USERNAME_KEY,value);
}

function getUserName(){
    return localStorage.getItem(USERNAME_KEY);
}


//Logic
const savedUsername = getUserName();

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
