document.querySelector(".home").addEventListener("click",function(){
    window.location.href="index.html";
});
document.querySelector(".login").addEventListener("click",function(){
    window.location.href="login.html";
});
document.querySelector(".signup").addEventListener("click",function(){
    window.location.href="signup.html";
});
let data=JSON.parse(localStorage.getItem("users"))||[];
document.querySelector("#myform").addEventListener("submit",function(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let contact=document.querySelector("#contact").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;
    function obj(){
        this.name=name;
        this.contact=contact;
        this.email=email;
        this.password=pass;
    }
    let user_obj= new obj();
    data.push(user_obj);
    localStorage.setItem("users",JSON.stringify(data));
    window.location.href=login.html;
});