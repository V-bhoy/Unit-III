//here retrieve the generated number from Localstorage.
var x=localStorage.getItem("number");
document.querySelector("#show_number").style.color="white";
if(x==="6")
{
    document.querySelector("#show_number").style.background="green";

}
else if(x==="1")
{
    document.querySelector("#show_number").style.background="yellow";
}
else
{
    document.querySelector("#show_number").style.background="red";
}
document.querySelector("#show_number").innerText=x;