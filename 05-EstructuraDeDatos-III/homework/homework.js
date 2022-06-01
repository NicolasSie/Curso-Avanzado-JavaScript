'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(valor) {
       this.value = valor;
       this.left = null;
       this.right = null;
}

BinarySearchTree.prototype.insert = function(valor){
  let binary = new BinarySearchTree(valor)
  if (valor < this.value){
    if( !this.left) {
      this.left= binary
    } else {
      this.left.insert(valor)
    }
  } else { if (!this.right) this.right = binary
    else this.right.insert(valor)
  } 

}

BinarySearchTree.prototype.contains= function(valor){
  
  if (this.value=== valor) return true
  if (!this.right && !this.value) return false
  if (valor < this.value){
    if( this.left.value === valor) {
      return true 
    } else {
      this.left.contains(valor)
    }
  } else { if (this.right.value===valor) return true
    else this.right.contains(valor)
  } 

}
BinarySearchTree.prototype.depthFirstForEach= function(){}
BinarySearchTree.prototype.breadthFirstForEach= function(){}
BinarySearchTree.prototype.size= function(){}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
