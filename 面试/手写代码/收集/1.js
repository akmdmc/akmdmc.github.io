

function Fnc(){
  getName = ()=>console.log(1);
  return this
}

Fnc.getName = ()=>console.log(2);

Fnc.prototype.getName = ()=>console.log(3);

var getName = ()=>console.log(4);

function getName(){
  console.log(5);
  
}

Fnc.getName()
getName()
// Fnc().getName()
// getName()

console.log(global);
console.log(this);



