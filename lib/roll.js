#!/usr/bin/env node

export function roll(numSides, numDices, numRolls){
    console.log("made it here!")
    let results = [];
    for( var i=0;i<numRolls; i++){
        var rolls=0;
        for(var d=0;i<numDices;d++){
            rolls+=Math.floor(Math.random()*numSides)+1;
        }
        results.push(rolls);
    }
    console.log(results);
    const ouputRes= {
        "sides": numSides,
        "dice": numDices,
        "rolls": numRolls,
        "results": results
    };
    console.log(JSON.stringify(outputRes));

    return JSON.stringify(outputRes);
}