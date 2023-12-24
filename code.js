const griddy = document.querySelector('#griddy');

let inpt = '50';
let set = 200;
let wid = inpt + 'px';


for (let i = 0; i < set; i++) {
    const sqr = document.createElement('div');
    sqr.classList.add('sqr');
    sqr.style.width = wid;
    sqr.style.height = '50px';
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



