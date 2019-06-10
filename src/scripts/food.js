// Move this function into a module called food.js
function createFoodComponent(foodObj) {
  return `
    <h2>${foodObj.name}</h2>
    <h3>This is some food info</h3>
    <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
  `
}

function AddFoodComponentToDom(foodObj) {
  document.querySelector("#food-list").innerHTML += createFoodComponent(foodObj)
}
