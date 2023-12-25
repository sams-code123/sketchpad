
// Here I just grab these for later use
const griddy = document.querySelector('#griddy'); // AKA grid
const setting = document.querySelector('#setting');


 // Function to remove all square child elements from parent node 'griddy' when setting button is clicked
 function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// here I load a sketchpad to draw on automatically set to 130 squares per side when the page loads and also when the reset button is clicked
// dim = dimensions
let dim = 100;

let side = dim;
let inpt = 650 / side; // this is the total width in pixels of the drawing space divided by how many squares they want per side of the drawing space (drawing space is 650 pixels by 650 pixels)

let sqrd = side;
let set = sqrd * side;
console.log(set);
let wid = inpt + 'px';
let heit = inpt + 'px';

console.log(heit);
console.log(wid);


for (let i = 0; i < set; i++) {
    const sqr = document.createElement('div');
    sqr.classList.add('sqr');
    sqr.style.width = wid;
    sqr.style.height = heit;
    sqr.style.backgroundColor = 'white';
    griddy.appendChild(sqr);

    sqr.addEventListener('mouseover', function hover(event) {
        console.log('hovered', event);
        sqr.style.backgroundColor = 'black';
    });
}

// note to self: if the width is set to 650px, you just need to make sure to not let the height or width of the squares combined exceed 650px and also always equal 650px;

// Here I make the code for when the user clicks the setting button to adjust size of grid

setting.addEventListener('click', () => { 

    removeAllChildNodes(griddy);
    // here dim = dimensions
    dim = prompt('Enter the number of blocks per side of the square grid (not greater than 200).');

    if (dim > 200){
        dim = 200;
    } 

    side = dim;
    inpt = 650 / side; // this is the total width in pixels of the drawing space divided by how many squares they want per side of the drawing space (drawing space is 650 pixels by 650 pixels)

    sqrd = side;
    set = sqrd * side; // this is just one side of the drawing space multiplied by another side to find amount of squares to make inside the grid
    console.log(set);
    wid = inpt + 'px';
    heit = inpt + 'px';
    
    console.log(heit);
    console.log(wid);


    for (let i = 0; i < set; i++) {
        const sqr = document.createElement('div');
        sqr.classList.add('sqr');
        sqr.style.width = wid;
        sqr.style.height = heit;
        sqr.style.backgroundColor = 'white';
        griddy.appendChild(sqr);

        sqr.addEventListener('mouseover', function hover(event) {
            console.log('hovered', event);
            sqr.style.backgroundColor = 'black';
        });
    }

});





