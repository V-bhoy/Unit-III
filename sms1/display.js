var list=JSON.parse(localStorage.getItem("student_data"));
list.map(function(elem,index){
    var row=document.createElement("tr");
    var col0=document.createElement("td");
    var col1=document.createElement("td");
    var col2=document.createElement("td");
    var col3=document.createElement("td");
    col0.innerText=index+1;
    col1.innerText=elem.name;
    col2.innerText=elem.phone;
    col3.innerText=elem.city;
    row.append(col0,col1,col2,col3);
    document.querySelector("#body").append(row);
});