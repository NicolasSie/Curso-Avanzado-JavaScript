
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x "soy un 10");           /// 10  ya que dentro de la funcion estan declarando a x
  console.log(a"souy un 8");           /// 8  porque cuando se invoca la funcion se para como parametrom 8 en el elemnto a, y el console busca en la funcion  a y etsa esta pasada como parametro 
  var f = function(a, b, c) {
    b = a;                  
    console.log(b "oy ocho");          ///8
    b = c;                  
    var x = 5;
  }
  f(a,b,c);
  console.log(b+ "soy un nueve ");           ////9
}
c(8,9,10);
console.log(b"soy un diezz");             ///10
console.log(x);             ///1
```

```javascript
console.log(bar);           /// undefined esto pasa por el hoisting 
console.log(baz);           /// undefined igual que la linea 35 ya que las variables no estan declaradas antes de que las llamemos
foo();
function foo() { console.log('Hola!'); } /// hola
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //// franco 
```

```javascript
var instructor = "Tony";
console.log(instructor);  //// tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //// franco 
   }
})();
console.log(instructor);     //// tony 
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);       /// the 
    console.log(pm);               /// revers
}
console.log(instructor);           /// the
console.log(pm);                   ///franco 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"       /// 2
"2" * "3"       //// 6
4 + 5 + "px"    //// 9px
"$" + 4 + 5     ///$45
"4" - 2         ///2
"4px" - 2       ///  nand
7 / 0           ///infinito
{}[0]           ///
parseInt("09")  ///
5 && 2         ///
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]   //// 
3>2>1          //// true
[] == ![]       ///
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();              //// cuando incovamos la funcion, nos va a mostar un undefined y 2, ya que el hoisting de una variable, sube la variable pero no el valor de ella, a cambio que de la funcion si sube toda la funcion sin modificarla 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);     //////////  fris
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};


console.log(obj.prop.getFullname());       //// aurelio 
var test = obj.prop.getFullname;

console.log(test());      //// 
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
