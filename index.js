function buildHistogram(magazine){
    let histogram = {}; 
    // loop through magazine and add an entry to the letter if it exists, or make it 1 if it does not exist 
    magazine.forEach(letter => {
        if (!histogram[letter]){
            histogram[letter] = 1; 
        }else{ 
            histogram[letter] +=1;
        }
    })
    return histogram; 
}

function canBuildNote(magazine, note){
    let histogram = buildHistogram(magazine); 
    // turn note into an array 
    note = note.split('')
    let result; 
    // iterate through note and for each letter reduce the histograms entry for that letter by 1 
    // if that letter doesn't exist in the histogram, return false 
    note.forEach(letter => {
        if (histogram[letter] >= 1 && result !== false){
            histogram[letter] -=1; 
            result = true; 
        }else{
            result = false;
        }
    })
    return result; 
}