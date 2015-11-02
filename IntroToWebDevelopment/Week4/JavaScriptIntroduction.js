function rocketCountdown(startNumber) {

    // If user didn't specify a start number we'll revert to 10
    if(typeof startNumber === 'undefined') {
        console.log("Counting down from 10");
        startNumber = 10;
    }

    for(n = startNumber; n > 0; n--) {
        console.log(n);
    }
    console.log("Blastoff!!!");
}

rocketCountdown(5);
