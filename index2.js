console.log("Before food is prepared");

//FOOD
function prepareFood() {

    // promise takes a func n passes 2 func as a parameter
    let promise = new Promise( function(resolve, reject) {
        //change timeline of execution of result, can set time
        setTimeout( () => {
            console.log('Preparing Food');
            resolve('Food is ready');
        },10) //time in sec
    });

    return promise;
}

function prepareFrenchToast() {
    let promise = new Promise( function(resolve, reject) {
        setTimeout( () => {
            console.log('Preparing French Toast');
            resolve('French Toast is ready');
        },20)
    });
    return promise;
}

function prepareCoffee() {
    let promise = new Promise( function(resolve, reject) {
        setTimeout( () => {
            console.log('Preparing Coffee');
            resolve('Your Coffee is ready');
        },30)
    });
    return promise;
}

let promise = prepareFood();
//console.log('Promise = ', promise);
promise.then(function(value) {
    console.log('Food is ready callback= ', value);
    return prepareFrenchToast();
})
.then(function(frenchToastValue){
    console.log('French Toast are ready callback= ', frenchToastValue);
    return prepareCoffee();
})
.then(function(coffeeValue){
    console.log('Coffee is ready callback= ', coffeeValue);
})
.catch(function(error) {
    console.log('Error= ', error);
});

//CALLBACK HELL
/*
prepareFood( function(value) {
    console.log('Food is ready callback= ', value);
    prepareFrenchToast( function(value) {
        console.log('French Toast are ready callback= ', value);
        prepareCoffee( function(value) {
            console.log('Coffee is ready callback= ', value);
        }); 
    });
}); 
*/

console.log("After food is prepared, breakfast is served");