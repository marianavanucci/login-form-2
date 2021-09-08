// This is a study based on this tuturial on youtube https://www.youtube.com/watch?v=LUMFITn510U

console.log('estou funcionando mesmo?')

var email = document.querySelector("#email");

    email.addEventListener("focus",()=>{
        email.style.borderColor = "cadetblue";
});
    email.addEventListener("blur",()=>{
        email.style.borderColor = "#ccc";
});

var password = document.querySelector("#password");

    password.addEventListener("focus",()=>{
        password.style.borderColor = "cadetblue";
});
    password.addEventListener("blur",()=>{
        password.style.borderColor = "#ccc";
});