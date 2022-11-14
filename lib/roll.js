#!/usr/bin/env node

export function roll(numSides, numDices, numRolls){
    let results = [];
    for( var i=0;i<numRolls; i++){
        var rolls=0;
        for(var d=0;i<numDices;d++){
            rolls+=Math.floor(Math.random()*numSides)+1;
        }
        results.push(rolls);
    }

    return{
        "sides": numSides,
        "dice": numDices,
        "rolls": numRolls,
        "results": results
    };
}