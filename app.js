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
    } else {
        var selectCake = prompt('What cake would you like to order - birthday/wedding/specialty?');
        if (selectCake === 'birthday' || selectCake === 'wedding' || selectCake === 'specialty') {
            var numberCakes = prompt('How many cakes would you like to order?');
                while (numberCakes === '' || isNaN(numberCakes)) {
                var numberCakes = prompt('Great, how many cakes would you like to order? PLEASE enter a number');
                }
            return numberCakes;    
            msgClasses = 'You ordered' + numberCakes + 'today' + '!';
        } else {
            msgClasses = 'Thank you for visiting our site!';
        }
    }
    return '<p>' + msgClasses + '!' + '</p>';
}

function getCartoon() {
    var cartoon = '<img src="images/cartoon_cake.png">';
    for (var i = 0; i < numberCakes; i++) {
        result = result + '<p id = "cartoon"> Cake no.' + (i + 1) + '' + cartoon + '</p>';
    }
    return '<p>' + 'You ordered' + '' + numberCakes + '' + 'cakes! ' + '</p>';
}