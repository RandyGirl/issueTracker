
document.addEventListener("DOMContentLoaded", ()=>{

    let loginForm = document.querySelector("#login-container");
    let registerForm = document.querySelector("#register-container");

    document.querySelector("#toRegister")
    .addEventListener("click", (event)=>{
        event.preventDefault();
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    })

    document.querySelector("#toLogin")
    .addEventListener("click", (event)=>{
        event.preventDefault();
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        //console.log(event.target.innerText);
    })
    
})
    // let username = document.getElementById("username");
// let p = document.getElementsByTagName("h1");
// console.log(p);
// console.log(username);