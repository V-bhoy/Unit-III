//Store the generated number in LocalStorage with key "number".
function generate(){
   var x=Math.floor((Math.random()*6)+1); 
   console.log(x);
   localStorage.setItem("number",x);
   
}