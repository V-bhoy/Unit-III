//store the products array in localstorage as "products"
var data=JSON.parse(localStorage.getItem("products"))||[];
document.querySelector("#product_form").addEventListener("submit",function(event){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var price=document.querySelector("#price").value;
    var type=document.querySelector("#type").value;
    var url=document.querySelector("#image").value;
    function obj(){
        this.name = name;
        this.price = price;
        this.type = type;
        this.url = url;
    }
    var dataobj= new obj();
    data.push(dataobj);
    localStorage.setItem("products",JSON.stringify(data));
})
document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href="inventory.html";
})