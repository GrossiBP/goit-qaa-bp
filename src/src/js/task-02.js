const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul#ingredients')
let li = document.createElement('li')

ingredients.forEach(ingredient => {
  console.log(ingredient)
  li.innerText = ingredient
  ul.appendChild(li)
})