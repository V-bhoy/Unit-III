var data=JSON.parse(localStorage.getItem("products"));
data.map(function(elem,index){
    var img=elem.url;
    var name=elem.name;
    var type=elem.type;
    var price=elem.price;
    var box=document.createElement("div");
    var image=document.createElement("img");
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    var p3=document.createElement("p");
    var btn=document.createElement("button");
    btn.innerText="Remove product";
    btn.addEventListener("click",function(){
        box.innerHTML=null;
        box.display="none";
        var i=data.indexOf(elem);
        data.splice(i,1);
        localStorage.setItem("products",JSON.stringify(data));
    })
    image.setAttribute("src",img);
    box.style.height="320px";
    p1.innerText=name;
    p1.style.fontSize="20px";
    p1.style.fontWeight="bold"
    p2.innerText=type;
    p2.style.color="gray";
    p2.style.fontWeight="bold"
    p3.innerText=price;
    p3.style.padding="0px";
    p3.style.paddingLeft="20px"; 
    p3.style.color="gray";
    p3.style.fontWeight="bold"
    image.style.width="100%";
    image.style.height="200px";
    box.append(image,p1,p2,p3,btn);
    document.querySelector("#products_data").append(box);
})
document.querySelector("#add_product").addEventListener("click",function(){
    window.location.href="index.html";
})
