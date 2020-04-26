function buildHistogram(array) {
    let result = {}
    array.forEach(letter => {
        if (result[letter]) {
            result[letter] = result[letter] + 1
        } else {
            result[letter] = 1
        }
    });
    return result
}

function canBuildNote(array, note) {
    let histogram = buildHistogram(array)
    let letterArray = note.split('')
    while (letterArray.length > 0){
        let letter = letterArray.shift()
        if (histogram[letter] > 0) {
            histogram[letter] = histogram[letter] - 1
        } else {
            return false
        }
    }
    return true
}