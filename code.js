
// Here I just grab these for later use
const griddy = document.querySelector('#griddy');
const setting = document.querySelector('#setting');


// here I just make a grid automatically for when the page loads without any user input 

// note to self: if you make the sides equal to each other shouldnt it always be a square?
// if the width is set to 900px, you just need to make sure to not let the height of the squares combined exceed 900px and also always equal 900px;


// Here I make the code for when the user clicks the setting button to adjust size of grid

setting.addEventListener('click', () => { 
    let dim = prompt('Enter the number of blocks per side of the square grid');

    let side = dim;
    let inpt = 650 / side; // this is the total width divided by how many squares they want per side

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

        // sqr.addEventListener('mouseout', function unhover(event) {
        //     console.log('unhovered', event);
        //     sqr.style.backgroundColor = 'white';
        // });
    }
   

    
});





