var selection = prompt('Do you like to eat or bake cakes?');
var message;

if (selection === 'eat'){
  message = 'Eating cakes is fun!';
} else if (selection === 'bake'){
  message = 'Baking cakes is fun!';
} else {message = 'Try our cakes for fun'}

document.write('<h3>' + message + '</h3>');