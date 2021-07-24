const USERINFO_KEY = "userinfo";
const HIDDEN_CLASSNAME = "hidden";

const userForm = document.querySelector("#user-form");
const childForm = document.querySelector("#login");
const todoLayout  = document.querySelector("#todo-layout");
const todoForm  = document.querySelector("#todo-form");

const savedUserInfo  = localStorage.getItem(USERINFO_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    const userInfo = {};

    const userName = document.querySelector("#username");
    const company = document.querySelector("#company");
    const date = document.querySelector("#date");

    userForm.classList.add(HIDDEN_CLASSNAME);
    todoLayout.classList.remove(HIDDEN_CLASSNAME);
    userInfo.username = userName.value;
    userInfo.company = company.value;
    userInfo.date = date.value;
    userInfo.todo="";
    localStorage.setItem(USERINFO_KEY,JSON.stringify(userInfo));
    location.reload();
  

}

function paintGreeting(info){

  const greeting = document.querySelector("#greeting");
  const company  = greeting.querySelector("ul li:nth-child(1)");
  const userName = greeting.querySelector("ul li:nth-child(2)");
  const date = greeting.querySelector("ul li:nth-child(3)");

  const userInfo = JSON.parse(info);
  console.dir("Test");
  userName.textContent = "사용자:"+userInfo.username;
  company.textContent = "회사명:"+userInfo.company;
  date.textContent = "입사일:"+userInfo.date;
  
}

if(savedUserInfo===null){
  userForm.classList.remove(HIDDEN_CLASSNAME);
  childForm.addEventListener("submit",onLoginSubmit);
}else{
  todoLayout.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUserInfo);
}


