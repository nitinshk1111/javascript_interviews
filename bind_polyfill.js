

let myName = {
  firstName: 'Nitin',
  lastName: 'Shekhar',
};
 
console.log("================ browser native bind results============")
function sayName(param1, param2, param3) {
  console.log(this.firstName + " " + this.lastName);
  console.log(param1 + '   ' + param2 + '   '+ param3);
}


const t = sayName.bind(myName, "first", "second");
 t("third");


// my bind implementation

Function.prototype.myBind = function (context, ...args1) {
  //first argument is passed object 
  // 2nd argument (args1) list of params passed to mybind
  
  const fn = this; // this will point to function
  let obj = context; // context is nothing but object for which you want to bind
  return (...args2) => {
    // args2 are argument passed in returned function, which call at later time.
    fn.apply(obj, [...args1, ...args2]);
  };
};

console.log("=============== my bind results============")
const x = sayName.myBind(myName, 'param1', 'param2');
x("param3");
