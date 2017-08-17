let todoArr = require('./todo.js');
let completeArr = require('./comp.js');

function addItem(item){
  let newItem = {id:(todoArr.length+1)+(completeArr.length+1), task: item};
  todoArr.push(newItem);
  console.log(todoArr);
}

function getPendingItems (){
  return todoArr.filter(function(item){
    return !item.completed
  })
}

function getCompItems(itemId){
  return todoArr.filter(function(item){
    return item.completed
  })
}

function editItem(){
}

function removeItem(itemId){
  return todoArr.find(function(item){
    if(item.id == itemId){
      item.completed = true
      return item
    }
  })
}

module.exports = {
  addItem: addItem,
  removeItem: removeItem,
  getPendingItems: getPendingItems,
  getCompItems: getCompItems
}
