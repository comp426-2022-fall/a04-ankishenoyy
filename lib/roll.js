#!/usr/bin/env node

export function roll(numSides, numDices, numRolls){
    let results = [];
    for( var i=0;i<numRolls; i++){
        var rolls=0;
        for(var d=0;d<numDices;d++){
            rolls+=Math.floor(Math.random()*numSides)+1;
        }
        results.push(rolls);
    }
    const outputRes= {
        "sides": numSides,
        "dice": numDices,
        "rolls": numRolls,
        "results": results
    };

    return JSON.stringify(outputRes);
}
