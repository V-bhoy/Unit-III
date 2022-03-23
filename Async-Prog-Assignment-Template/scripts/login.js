document.querySelector(".home").addEventListener("click",function(){
    window.location.href="index.html";
});
document.querySelector(".login").addEventListener("click",function(){
    window.location.href="login.html";
});
document.querySelector(".signup").addEventListener("click",function(){
    window.location.href="signup.html";
});
let data=JSON.parse(localStorage.getItem("users"));
document.querySelector("#login_form").addEventListener("submit",function(){
    let form=document.querySelector("#login_form");
    let email=form.email.value;
    let pass=form.pass.value;
    let flag=0;
    data.map(function(elem,index){
        
        if(elem.email===email && elem.password===pass){
            flag=1;
        }
    })
    if(flag===1){
          
          alert("Yayy...Login Successful! 😄");
          window.location.href="index.html";
    }
    else{
        alert("Oops...Invalid Credentials 😕")
    }
})