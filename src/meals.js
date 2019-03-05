var meals = ['breakfast', 'lunch', 'supper'];

console.log(meals.sort());
meals.forEach(function(currentValue, index, arr){
  alert(index, currentValue, arr);
});

var unusedMealsCopy = meals.slice();
var mealsSort = meals.sort();