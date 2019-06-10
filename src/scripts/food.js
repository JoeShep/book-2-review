// Move this function into a module called food.js
function createFoodComponent(foodObj) {
  return `
    <h2>${foodObj.name}</h2>
    <h3>This is some food info</h3>
    <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
  `
}

function createFoodSearchComponent(foodObj) {
  return `
    <h2>${foodObj.text}</h2>
    <h3>${foodObj.parsed[0].food.label}</h3>
    <img src=${foodObj.parsed[0].food.image}>
  `
}

function AddFoodComponentToDom(foodComponent, element) {
  document.querySelector(`#${element}`).innerHTML += foodComponent
}
