//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
let scope_data={
    Task:"determines the accesibility of variables",
    types:"Local scope & Global scope",
    Local_scope:"decalared inside a block, can be accessed only within the block",
    Global_scope:"declared outside a block, can be accessed globally",
};
let hoisting_data={
    Task:"the interpreter moves the declaration of functions,variables or classes to the top of their scope and allocates memory prior to execution of the code",
    Significance:"allows to use functions safely even before declaring them.",
    Effect:"throws reference error when trying to access a previously undeclared variable."
};
let constructor_func_data={
    Task:"allows you to create multiple objects by calling the function using new keyword.",
    Efficiency:"not memory efficient, since same properties are duplicated at every instance.",
    Usage:"used in libraries and frameworks to make syntax more flexible"
};
let prototype_data={
    Task:"allows you to add new properties and methods to object constructors",
    Efficiency:"makes constructor object memory efficient when used with prototype",
    Significance:"All Javascipt objects inherit properties and methods from a prototype"
};
localStorage.setItem("scope",JSON.stringify(scope_data));
localStorage.setItem("hoisting",JSON.stringify(hoisting_data));
localStorage.setItem("constructor",JSON.stringify(constructor_func_data));
localStorage.setItem("prototype",JSON.stringify(prototype_data));
document.querySelector("#scope").addEventListener("click",function(){
    document.querySelector(".info").innerText=null;
    let info=JSON.parse(localStorage.getItem("scope"));
    for(var key in info)
    {
        let para=document.createElement("p");
        para.style.fontSize="15px";
        para.style.padding="10px";
        para.innerText=key+": "+info[key];
        document.querySelector(".info").append(para);
    }
    
    
});
document.querySelector("#hoisting").addEventListener("click",function(){
    document.querySelector(".info").innerText=null;
    let info=JSON.parse(localStorage.getItem("hoisting"));
    for(var key in info)
    {
        let para=document.createElement("p");
        para.style.fontSize="15px";
        para.style.padding="10px";
        para.innerText=key+": "+info[key];
        document.querySelector(".info").append(para);
    }
    
});
document.querySelector("#constructor_func").addEventListener("click",function(){
    document.querySelector(".info").innerText=null;
    let info=JSON.parse(localStorage.getItem("constructor"));
    for(var key in info)
    {
        let para=document.createElement("p");
        para.style.fontSize="15px";
        para.style.padding="10px";
        para.innerText=key+": "+info[key];
        document.querySelector(".info").append(para);
    }
    
});
document.querySelector("#prototype").addEventListener("click",function(){
    document.querySelector(".info").innerText=null;
    let info=JSON.parse(localStorage.getItem("prototype"));
    for(var key in info)
    {
        let para=document.createElement("p");
        para.style.fontSize="15px";
        para.style.padding="10px";
        para.innerText=key+": "+info[key];
        document.querySelector(".info").append(para);
    }
    
});