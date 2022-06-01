'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
this.head = null,
this.lengt = 0
this.cola = this.head
}

function Node(value){
this.value = value,
this.next = null
}

LinkedList.prototype.add =  function(value){
            let nodo = new Node(value)
            if (this.head === null){
              this.head = nodo
            }
            else{
              this.cola.next= nodo
            }
            this.cola= nodo
}
LinkedList.prototype.remove =  function(){
  if (this.head === null){
   return null
  }
  if (!this.head.next){
    let guardado= this.head.value;
    this.head= null
    return guardado 
  }
  else {
    let regresa= this.cola.value
  let actual = this.head
  while(actual.next.next !==null){
    actual = actual.next
  }
  actual.next= null
  this.cola= actual
  return regresa
  }
}
LinkedList.prototype.search =  function(value){
  if (this.head === null){
    return null}

  var  callback;

  if (typeof value !== "function") {
    callback= function (algo){
      if (algo===value) return true
      else return false 
    }
  }else {callback= value}

  let actual= this.head
  while(actual){
       if (callback(actual.value)) {return actual.value}
         else {actual = actual.next}
}

return null


}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
this.numBuckets = 35
this.contenedores = []
}
HashTable.prototype.hash= function (string){
  
  let suma = 0
  for(let elemento in string){
    suma = suma + string.charCodeAt(elemento)
  }
  return suma % this.numBuckets
}
HashTable.prototype.set= function (string,valor){
  if (typeof string !== 'string'){ throw new TypeError ('Keys must be strings')}
  let posición = this.hash(string)
  if (!this.contenedores[posición]){
    this.contenedores[posición]= []
  }
  this.contenedores[posición].unshift([string,valor])
 
}
HashTable.prototype.get= function (string){
  let posición =this.hash(string)
  let actual = this.contenedores[posición]
  if (actual){
  for (let i = 0; i < actual.length ; i++){
    if (actual[i][0]===string ){
  return actual[i][1]
  }
 }
}
  return false
}
HashTable.prototype.hasKey= function (string){
  let posición =this.get(string)
 if (posición) return true
 else return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
