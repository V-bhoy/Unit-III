let num=0;
function order(){
    let food = get("food");
    let status="open";
    
    let mypromise = new Promise(function(resolve,reject){
           let i=(Math.floor(Math.random()*5)+1)*1000;
           setTimeout(function(){
                 if(status==="open"){
                 num++;     
                 resolve(`Your ${food} is ready 😍🤤`);
                }
                
           },i);
           if(status==="close"){
                reject("Shop closed!");
           } 
    });
    mypromise.then(function(response){
        let box = document.querySelector(".container");
        box.innerHTML=null;
        let msg=document.createElement("div");
        msg.style.background="rgba(0,0,0,0.8)";
        msg.style.width="40%";
        msg.style.color="yellow";
        msg.style.padding="5px";
        msg .style.textAlign="center";
        msg.style.borderRadius="5px";
        msg.innerText=response;
        let order_num=document.createElement("h2");
       
        let size=num.toString().length;
        switch(size){
            case 1:
                order_num.innerText="Order No: #00"+num;
                break;
            case 2:
                order_num.innerText="Order No: #0"+num;
                break;
            case 3:
                order_num.innerText="Order No: #"+num;
                break;
        }
        let image=document.createElement("img");
        switch(food){
            case "burger":
                image.src="https://media.istockphoto.com/photos/burger-with-a-marble-beef-patty-in-open-paper-package-on-a-yellow-picture-id1338323714?k=20&m=1338323714&s=170667a&w=0&h=M4bil1pvLf3CSaEN-7s_gjl4ZTtxj8mdZje2fSTOTpc=";
                break;
            case "pizza":
                image.src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=";
                break; 
            case "fries":
                image.src="https://images.unsplash.com/photo-1596769968821-6d3bf5e8f50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWNkb25hbGRzJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
                break;
            case "coke":
                image.src="https://w0.peakpx.com/wallpaper/511/168/HD-wallpaper-mcdonalds-coca-cola-mc.jpg";
                break;
            case "nuggets":
                image.src="https://images.unsplash.com/photo-1619881589279-20f389897508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWNkb25hbGRzJTIwbnVnZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
                break;   
        }
        box.append(msg,order_num,image);
    });
    mypromise.catch(function(error){
        let box = document.querySelector(".container");
        box.innerHTML=null;
        let image=document.createElement("img");
        image.src="https://i.guim.co.uk/img/media/5c8971eb4182e6a03c91f22b87c57798ee9fcff0/0_152_4550_2730/master/4550.jpg?width=700&quality=85&auto=format&fit=max&s=bb2879871cb0c4453a2a6f0e932d78de";
        box.append(image);
    });
}
function get(id){
    return document.getElementById(id).value;
}

    