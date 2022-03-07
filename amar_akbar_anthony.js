function skill(name){
    console.log(`I am  ${name} and I gained ${this.skill} skills!`);
}
console.log(vaishali);
var Amar={
    city: "Goa",
    skill: "singer"
}
var Akbar={
    city: "Mumbai",
    skill: "chef"
}
var Anthony={
    city: "Kashmir",
    skill: "magician"
}
skill.call(Akbar,"Amar");
skill.call(Anthony,"Akbar");
skill.call(Amar,"Anthony");