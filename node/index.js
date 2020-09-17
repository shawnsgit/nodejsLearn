var rect = require('./rectangle');

function solveRect(l,b){
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("RECTANGLE AREA: ",rectangle.area());
            console.log("RECTANGLE PRIMETER: ",rectangle.primeter())
        }
    })
}

solveRect(2,3)