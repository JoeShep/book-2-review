// Both functions return a Promise object
function getLocalFood() {
  return fetch("http://localhost:8088/food")
  .then( data => data.json())
}

function getAPIFood(barcode) {
  return fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
  .then( foodFromAPI => foodFromAPI.json())
}

function addAPIData(foodArr) {
  foodArr.forEach( foodItem => {
    getAPIFood(foodItem.barcode)
    .then( foodItemFromAPI => {
      if (foodItemFromAPI.product.ingredients_text) {
        foodItem.ingredients = foodItemFromAPI.product.ingredients_text
      } else {
        foodItem.ingredients = "ingredients not listed"
      }
      AddFoodComponentToDom(createFoodComponent(foodItem), "food-list")
    })
  })
}
