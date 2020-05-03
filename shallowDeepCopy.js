function myFunction2(){
   
   document.write(" Deep Copy and Shallow Copy in Javascript <br>");
   document.write("A shallow copy of the object can be done using object.assign() method <br>");
let obj = {
  a: 1,
  b: 2,
};
document.write(obj.a+"           "+obj.b);
let objCopy = Object.assign({}, obj);

document.write("<br>Object.assign new copy created :     "+objCopy.a+"            "+   objCopy.b);

document.write("<br>We have made a copy of obj. Let's see value of b=80 changed <br> ");
objCopy.b = 80;
document.write(objCopy.a+"         "+objCopy.b);
document.write("<br>A Deep copy of the object can be done using JSON.parse(JSON.stringify(object));<br>");

let obj1 = { 
  a: 1,
  b: { 
    c: 2,
  },
}
let newObj = JSON.parse(JSON.stringify(obj1));
obj1.b.c = 20;
document.write(obj1.a +"             "+obj1.b.c);
document.write("<br>");
document.write(newObj.a+"             "+ newObj.b.c);


}
myFunction2();
