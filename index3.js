console.log("Before food is prepared");

//FOOD
function prepareFood(data) {

    // promise takes a func n passes 2 func as a parameter
    let promise = new Promise( function(resolve, reject) {
        //change timeline of execution of result, can set time
        setTimeout( () => {
            if(data !== 2) {
                console.log('Preparing Food');
                resolve('Food is ready');
            }
            else {
                reject('Value not acceptable')
            }
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

//async used in func declaration 
//await to call func, always inside async func 
async function startProcess() {
    try {
        let foodValue = await prepareFood(2); //error 
        console.log('Food: ', foodValue);
        let frenchToastValue = await prepareFrenchToast();
        console.log('FrenchToast: ', frenchToastValue);
        let coffeeValue = await prepareCoffee();
        console.log('Coffee: ', coffeeValue);
    }
    catch(error) {
        console.log('Error in catch = ', error)
    }
}
startProcess();

console.log("After food is prepared, breakfast is served");