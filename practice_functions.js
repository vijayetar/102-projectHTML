var name = prompt('What is your name?');
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
   greeting = 'Good evening,'; greetingTwo = "Go to Bed";
} else if (hourNow > 12) {
   greeting = 'Good afternoon,'; greetingTwo = "Get Lunch";
} else if (hourNow > 0) {
   greeting = 'Good morning,'; greetingTwo = "Go Going";
} else {
   greeting = 'Welcome,'; greetingTwo = "Go to Bed";
}
document.write('<h3>' + greeting + name + '<br />' + greetingTwo + '!' + '</h3>');

var count = prompt('How many cakes do you want to order?');

while (count === '' || isNaN(count)){
    var count = prompt('How many cakes do you want to order? PLEASE enter a number!');
    console.log(count);
}

if (count > 0) {
    var myCake = prompt('Tell me what type of cake- Birthday, Specialty, Wedding?'); 
}

if (myCake === 'Birthday' || myCake === 'Specialty' || myCake === 'Wedding') {
    message = '<img src="specialty_cake.jpg">'; return message;
} else {
    var myClasses = prompt('Tell me whether you are interested in adult or kid\'s classes?')
}
