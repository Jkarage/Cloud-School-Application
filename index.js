
const numbers = [1, -3, -4, 2, 89, 9, 20, 34, 'wewe']

function sumOfPositives(array) {
return array
    .filter(n => n >= 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
}

sumOfPositives(numbers);
