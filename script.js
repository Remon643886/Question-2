function checkEvenOdd(number) {
    if (typeof number !== 'number') {
        console.log('Please provide a valid number.');
        return;
    }

    if (number % 2 === 0) {
        console.log(number + ' is even.');
    } else {
        console.log(number + ' is odd.');
    }
}