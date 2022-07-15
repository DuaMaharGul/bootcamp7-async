console.log("Before food is prepared");
//FOOD
function prepareFood(firstcallback) {
    //change timeline of execution of result, can set time
    setTimeout( () => {
        console.log('Preparing Food');
        firstcallback('Food is ready');
    },10) //time in sec
    
}

function prepareFrenchToast(secondcallback) {
    setTimeout( () => {
        console.log('Preparing French Toast');
        secondcallback('French Toast is ready');
    },20)
}

function prepareCoffee(thirdcallback) {
    setTimeout( () => {
        console.log('Preparing Coffee');
        thirdcallback('Your Coffee is ready');
    },30)
}


//CALLBACKS
//send a func to a func (callback)
function firstcallback(value) {
    console.log('Food is ready callback= ', value);
    prepareFrenchToast(secondcallback);
}

function secondcallback(value) {
    console.log('French Toast are ready callback= ', value);
    prepareCoffee(thirdcallback); 
}

function thirdcallback(value) {
    console.log('Coffee is ready callback= ', value);
}

prepareFood(firstcallback); 

console.log("After food is prepared, breakfast is served");

