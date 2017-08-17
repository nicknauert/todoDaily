let todoArr = require('./todo.js');
let completeArr = require('./comp.js');

function addItem(item){
  let newItem = {id:(todoArr.length+1)+(completeArr.length+1), task: item};
  todoArr.push(newItem);
  console.log(todoArr);
}

function getItem(itemId){
  return todoArr.find(function(item){
    return itemId == item.id
  })
}

function getItems(){
  return todoArr
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

function editItem(itemId, updatedItem){
  return todoArr.map(function(item){
    if(itemId == item.id){
      item.task = updatedItem.editItem
      return item
    }
  })
}

function removeItem(itemId){
  return todoArr.map(function(item){
    if(item.id == itemId){
      item.completed = true
      return item
    } else {
      return item
    }
  })
}

module.exports = {
  addItem: addItem,
  removeItem: removeItem,
  getPendingItems: getPendingItems,
  getCompItems: getCompItems,
  editItem: editItem,
  getItem: getItem
}
