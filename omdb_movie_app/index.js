document.querySelector("#myform").addEventListener("submit",function(event){
     event.preventDefault();
     
     let movie=document.querySelector("#title").value; 
     let key="f8a49f0a";
     let url=`https://www.omdbapi.com/?apikey=${key}&t=${movie}`; 
    async function movie_promise(){
     
        try {
           let response=await fetch(url);
           let data= await response.json()
           if(data.Title===undefined){
             let box=document.querySelector(".container");
             box.innerHTML=null;
             let poster=make("img");
             poster.id="post";
             poster.src="https://media.istockphoto.com/photos/error-page-not-found-picture-id1153371118?k=20&m=1153371118&s=612x612&w=0&h=OOcu9PUVo_I1uyGrB8HLA2BNBmnEY9WR4QfiU8GBt8g=";
             box.append(poster);
           } 
           else{
              get_movie(data);
           }
           
        }
        catch(error){
           let box=document.querySelector(".container");
           box.innerHTML=null;
           alert("Oops...Something went wrong!")
        }
     }
     movie_promise();
     

});
function make(val){
    return document.createElement(val);
}
function get_movie(db){
           let box=document.querySelector(".container");
           box.innerHTML=null;
           let btn=make("button");
           btn.id="rec";
           btn.innerText="Recommended";
           let poster=make("img");
           let p1=make("p");
           let p2=make("p");
           let p3=make("p");
           let p4=make("p");
           let p5=make("p");
           let p6=make("p");
           poster.src=db.Poster;
           poster.id="post";
           p1.innerText=`Title: ${db.Title}`;
           p2.innerText=`Released: ${db.Released}`;
           p3.innerText=`Type: ${db.Type}`;
           p4.innerText=`Genre: ${db.Genre}`;
           p5.innerText=`Language: ${db.Language}`;
           p6.innerText=`imdbRating: ${db.imdbRating}`;
           box.style.background="rgba(28,28,28,0.8)"
           if(Number(db.imdbRating)>8.5){
              box.append(btn);
           }
          
           box.append(poster,p1,p2,p3,p4,p5,p6);
}