function next() {
    const gif = document.getElementById('envelope');
    const paper = document.getElementById('paper');

    gif.src = 'source/FINAL-2nd.gif';

    // Approx duration of the GIF in ms
    setTimeout(() => {
        paper.style.display = 'block';
        gif.style.display = 'none';
    }, 3000); // change 3000 to your gif length in ms
}
