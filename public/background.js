function background() {
    var randomColor;
    /* f (Math.random() > 0.5) { // Will generate a blue tint if greater than .5
        var blueTint = Math.floor(Math.random() * 156) + 100;
        randomColor = 'rgba(0, 0, ' + blueTint + ', 0.3)';
    }
    else {
        var purpleTint = Math.floor(Math.random() * 156) + 100;
        randomColor = 'rgba(' + purpleTint + ', 0, ' + purpleTint + ', 0.3)';
    } */
    

    var blueTint = Math.floor(Math.random() * 156) + 100;
    randomColor = 'rgba(0, 0, ' + blueTint + ', 0.3)';
    document.body.style.backgroundColor = randomColor;


    /* var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color
    document.body.style.backgroundColor = randomColor; // Set background color */
}
background();