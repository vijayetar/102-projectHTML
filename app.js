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
    } else { message = 'Try our cakes for fun!' }

    return '<h3>' + message + '</h3>';
}