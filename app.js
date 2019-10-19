var numberCakes;
// Get name and greeting//
function askName() {
    var name = prompt('What is your name?');
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening,';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon,';
    } else if (hourNow > 0) {
        greeting = 'Good morning,';
    } else {
        greeting = 'Welcome,';
    }
    return '<h3>' + greeting + name + '!' + '</h3>';
}

function choiceCakes() {
    var selection = prompt('Do you like to eat or bake cakes?');
    var message;

    if (selection === 'eat') {
        message = 'Eating cakes is fun!';
    } else if (selection === 'bake') {
        message = 'Baking cakes is fun!';
    } else {
        message = 'Try our cakes for fun!';
    }
    return '<h3>' + message + '</h3>';
}

function selectService() {
    var askClasses = prompt('Would you like to check out our classes? (Y/N)');
    var msgClasses;
    if (askClasses === 'yes' || askClasses === 'Y' || askClasses === 'y') {
        msgClasses = 'Great! Please click the classes image to check out our pricing';
        return '<h3>' + msgClasses + '!' + '</h3>';
    } else {
        var selectCake = prompt('What cake would you like to order - birthday/wedding/specialty?');
        if (selectCake === 'birthday' || selectCake === 'wedding' || selectCake === 'specialty') {
            numberCakes = prompt('How many cakes would you like to order?');
            while (numberCakes === '' || isNaN(numberCakes)) {
                numberCakes = prompt('Great, how many cakes would you like to order? PLEASE enter a number');
            }
            var image = '<img src="images/cartoon_cake.png" alt= "">';
            var cartoon = '';
            for (var i = 0; i < numberCakes; i++) {
                cartoon = cartoon + image;
            }
            return 'You ordered ' + numberCakes + cartoon + 'today! Please click image to order them. '

            cartoonCake();
        } else {
            msgClasses = 'Thank you for visiting our site!';
            return '<h3>' + msgClasses + '!' + '</h3>';
        }
    }
}
function cartoonCake() {
    var image = '<img src="images/cartoon_cake.png" alt= "">';
    var cartoon = '';
    for (var i = 0; i < numberCakes; i++) {
        cartoon = cartoon + image;
    }
    return 'You ordered ' + numberCakes + cartoon + 'today! Please click image to order them. '
}