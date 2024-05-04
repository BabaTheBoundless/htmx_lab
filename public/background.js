function background() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color
    document.body.style.backgroundColor = randomColor; // Set background color
}
background();