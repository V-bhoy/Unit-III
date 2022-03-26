let btn=document.querySelector("#search");
let map=document.querySelector("#gmap_canvas");
const displayData=async()=>{
    try{
        let city=document.querySelector("#city").value;
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e85d580660750d7980b2b10c79a28bb&units=metric`;
        let response=await fetch(url);
        let data=await response.json();
        forecast(data);
        info(data);
    }
    catch(error){
        alert("Oops...Something went wrong!");
    }
}

btn.addEventListener("click",displayData);
let box=document.querySelector("#info");
const info=(db)=>{
    box.innerHTML=null;
    let city=document.querySelector("#city").value;
    let para=document.createElement("p");
    para.innerText="TODAY-";
    let p1=document.createElement("p");
    let icon_code=db.weather[0].icon;
    let iconurl="https://openweathermap.org/img/w/"+icon_code+".png";
    let icon=document.createElement("img");
    icon.src=iconurl;
    p1.innerText="Weather: "+db.weather[0].description;
    let p2=document.createElement("p");
    p2.innerText="🌡 "+"Temp: "+db.main.temp+"C";
    let p5=document.createElement("p");
    p5.innerText="☁️ "+"Humidity: "+db.main.humidity;
    let p6=document.createElement("p");
    p6.innerText="💨 "+"Pressure: "+db.main.pressure;
    let p7=document.createElement("p");
    let d1=new Date(db.sys.sunrise*1000);
    let t1=d1.toLocaleTimeString();
    p7.innerText="🌅 "+"Sunrise: "+t1;
    let d2=new Date(db.sys.sunset*1000);
    let t2=d2.toLocaleTimeString();
    let p8=document.createElement("p");
    p8.innerText="🌇 "+"Sunset: "+t2;
    map.src =`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    box.append(para,p1,icon,p2,p5,p6,p7,p8);
}
const forecast=async(db)=>{
    try{
        let lat=db.coord.lat;
        let lon=db.coord.lon;
        let url1=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=3e85d580660750d7980b2b10c79a28bb&units=metric`;
        let res= await fetch(url1);
        let database= await res.json();
        let daily=database.daily;
        displayForecast(daily);
    }
    catch(error){
        alert("Oops...Something went wrong!"); 
    }  
}
const displayForecast=(db)=>{
    let daily=document.querySelector("#daily");
    let week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    daily.innerHTML=null;
    db.map((elem,index)=>{
        let icon_code=elem.weather[0].icon;
        let iconurl="https://openweathermap.org/img/w/"+icon_code+".png";
        let icon=document.createElement("img");
        icon.src=iconurl;
        let d=new Date(elem.dt*1000);
        let i=d.getDay()
        let day=week[i];
        let div=document.createElement("div");
        let week_day=document.createElement("p");
        week_day.innerText=day;
        let temp=document.createElement("p");
        temp.innerText="🌡  "+elem.temp.day;
        let min=document.createElement("p");
         min.innerText="Min: "+elem.temp.min;
        let max=document.createElement("p");
        max.innerText="Max: "+elem.temp.max;
        div.append(week_day,icon,temp,min,max);
        daily.append(div);
    })
    
    
}