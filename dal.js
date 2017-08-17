let todoArr = require('./todo.js');
let completeArr = require('./comp.js');

function addItem(item){
  let newItem = {id:(todoArr.length+1)+(completeArr.length+1), task: item};
  todoArr.push(newItem);
  console.log(todoArr);
}

function removeItem(itemId){
  let compItemIdx = todoArr.findIndex(function(item){
    return item.id == itemId
  })
  let compItem = todoArr.splice(compItemIdx, 1);
  completeArr = completeArr.concat(compItem);
  console.log(todoArr);
  console.log(completeArr);
}

module.exports = {
  addItem: addItem,
  removeItem: removeItem
}
