function hello(){
    console.log(hello)
}

function receivesAFunction(hello){
    hello();
}


function returnsANamedFunction(){
    function run(){
        console.log('run')
    }
    return run;
}



const returnsAnAnonymousFunction = anonymousGreeting => {
    return person => {
        return anonymousGreeting + person
    }
}