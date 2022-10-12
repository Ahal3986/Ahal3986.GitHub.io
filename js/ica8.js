let h1 = document.querySelector('h1');
h1.addEventListener('click', changeBackground);

function changeBackground()
{
    document.body.style.background = 'blue';
}

let h2 = document.querySelector('h2');
h2.addEventListener('click', changeFont);

function changeFont()
{
   h2.style.fontSize = '75px'
}