function create_arr(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    });
    Object.defineProperty(this,"first",{
         value:0,
         writable: true,
         enumerable:false
    });
    for(let i=0; i<arguments.length;i++){
        this[i]=arguments[i];
    }
    this.first=arguments[0];
    this.length=arguments.length;
}
create_arr.prototype.peek = function(){
    if(this.length===0)
    {
        throw new Error("Not present");
    }
    return this[this.length-1];
}
create_arr.prototype.push = function(value){
    let index=this.length;
    this[index]=value;
    this.length++;
    return this.length;
}
create_arr.prototype.pop = function(){
    let index=this.length - 1;
    delete this[index];
    this.length--;
    return this.length;
}
var v_arr=new create_arr("a","b","c");

console.log(v_arr);