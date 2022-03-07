document.querySelector("#myform").addEventListener("submit",myfunc);
let list=JSON.parse(localStorage.getItem("student_data"))||[];
function myfunc(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let phone=document.querySelector("#phone").value;
    let city=document.querySelector("#city").value;
    function obj(){
        this.name = name;
        this.phone = phone;
        this.city = city;
    }
    let data = new obj();
    console.log(data);
    list.push(data);
    localStorage.setItem("student_data",JSON.stringify(list));
    window.location.href="./display.html";
}