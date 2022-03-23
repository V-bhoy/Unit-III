document.querySelector(".home").addEventListener("click",function(){
    window.location.href="index.html";
});
document.querySelector(".login").addEventListener("click",function(){
    window.location.href="login.html";
});
document.querySelector(".signup").addEventListener("click",function(){
    window.location.href="signup.html";
})
let database=[
    {url: "https://mcdn.wallpapersafari.com/medium/70/8/VPH8My.png"},
    {url:"https://mcdn.wallpapersafari.com/medium/94/87/rGU3RV.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/56/67/U2bqlt.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/0/47/xmD5bP.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/32/50/AenDVl.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/43/53/t9cPjg.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/61/80/pOM8H5.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/98/34/EvhNVb.jpg"},
    {url:"https://mcdn.wallpapersafari.com/medium/57/73/Wq1jdv.jpg"},
];
localStorage.setItem("database",JSON.stringify(database));
//slideshow
let data=JSON.parse(localStorage.getItem("database"));
let box=document.querySelector("#slideshow");

let i=Math.floor((Math.random()*9));
let image=document.createElement("img");
    image.style.width="100%";
    image.style.height="100%";
    
    image.setAttribute("src",data[i].url);
box.append(image);
let id=setInterval(function(){
   
    box.innerHTML=null;
    i=Math.floor((Math.random()*9));
    image.setAttribute("src",data[i].url);
    box.append(image);
   
},2000);
//movie grid
let movie_data=[{
   Title:"Batman",
   Released:"23 June 1989",
   Genre:"Action,Adventure",
   Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
   imdbRating:7.5
},{
    Title:"Gangubai Kathiawadi",
    Released:"25 Feb 2022",
    Genre:"Biography,Crime,Drama",
    Poster:"https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg",
    imdbRating:4.5
},{
    Title:"The Kashmir Files",
    Released:"11 Mar 2022",
    Genre:"Drama, History, Thriller",
    Poster:"https://m.media-amazon.com/images/M/MV5BYzgzMTY3NTktNGFhNS00ZjEzLTk4NWUtYTAwMjc3NmMwZWJiXkEyXkFqcGdeQXVyMTQ5OTI1Nzc0._V1_SX300.jpg",
    imdbRating:10.0
},{
    Title:"Panipat",
    Released:"06 Dec 2019",
    Genre:"Action,Drama,History",
    Poster:"https://m.media-amazon.com/images/M/MV5BNDE1Yzc3ZTQtOTBjOS00ZmZhLThhNjMtMjE0ZTIyZWVlYjQyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    imdbRating:5.4
},{
    Title:"Jigsaw",
    Released:"27 Oct 2017",
    Genre:"Crime, Horror, Mystery",
    Poster:"https://m.media-amazon.com/images/M/MV5BNmRiZDM4ZmMtOTVjMi00YTNlLTkyNjMtMjI2OTAxNjgwMWM1XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
    imdbRating:5.7
},{
    Title:"It",
    Released:"08 Sep 2017",
    Genre:"Horror",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
    imdbRating:7.3
},{
    Title:"Shershaah",
    Released:"12 Aug 2021",
    Genre:"Action, Biography, Drama",
    Poster:"https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating:8.9
},{
    Title:"Brothers",
    Released:"04 Dec 2009",
    Genre:"Drama, Thriller, War",
    Poster:"https://m.media-amazon.com/images/M/MV5BMTkyMTY5MTcxOV5BMl5BanBnXkFtZTcwMTI3MDE3Mg@@._V1_SX300.jpg",
    imdbRating:7.1
},{
    Title:"Moana",
    Released:"23 Nov 2016",
    Genre:"Animation, Adventure, Comedy",
    Poster:"https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    imdbRating:7.6
}];
localStorage.setItem("movies",JSON.stringify(movie_data));
let movie_box=document.querySelector("#movies");
movie_data.forEach((elem)=>{
    let div=document.createElement("div");
    div.id="dab";
    let poster =document.createElement("img");
    poster.src=elem.Poster;
    let p1=document.createElement("p");
    p1.innerText="Title: "+elem.Title;
    let p2=document.createElement("p");
    p2.innerText="Released: "+elem.Released;
    let p3=document.createElement("p");
    p3.innerText="Genre: "+elem.Genre;
    let p4=document.createElement("p");
    p4.innerText="imdbRating: "+elem.imdbRating;
    div.append(poster,p1,p2,p3,p4);
    movie_box.append(div);
})
//sorting
let b1=document.querySelector("#sort-hl");
b1.addEventListener("click",()=>{
    movie_data.sort((a,b)=>{
        return b.imdbRating - a.imdbRating;
    })
    movie_box.innerHTML=null;
    movie_data.forEach((el)=>{
        let div=document.createElement("div");
        div.id="dab";
        let poster =document.createElement("img");
        poster.src=el.Poster;
        let p1=document.createElement("p");
        p1.innerText="Title: "+el.Title;
        let p2=document.createElement("p");
        p2.innerText="Released: "+el.Released;
        let p3=document.createElement("p");
        p3.innerText="Genre: "+el.Genre;
        let p4=document.createElement("p");
        p4.innerText="imdbRating: "+el.imdbRating;
        div.append(poster,p1,p2,p3,p4);
        movie_box.append(div);
    })
})
let b2=document.querySelector("#sort-lh");
b2.addEventListener("click",()=>{
    movie_data.sort((a,b)=>{
        return a.imdbRating - b.imdbRating;
    })
    movie_box.innerHTML=null;
    movie_data.forEach((element)=>{
        let div=document.createElement("div");
        div.id="dab";
        let poster =document.createElement("img");
        poster.src=element.Poster;
        let p1=document.createElement("p");
        p1.innerText="Title: "+element.Title;
        let p2=document.createElement("p");
        p2.innerText="Released: "+element.Released;
        let p3=document.createElement("p");
        p3.innerText="Genre: "+element.Genre;
        let p4=document.createElement("p");
        p4.innerText="imdbRating: "+element.imdbRating;
        div.append(poster,p1,p2,p3,p4);
        movie_box.append(div);
    })
})