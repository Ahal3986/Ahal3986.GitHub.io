const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img = ['img1w9.JPG', `img2w9.jpg`, `img3w9.jpg`, `img4w9.jpg`, `img5w9.jpg`];

const alts = {
  'img1w9.JPG' : 'Thugger',
  'img2w9.jpg' : 'Cat&Human highfive',
  'img3w9.jpg' : 'Closeup of a cat teeth',
  'img4w9.jpg' : 'NYC1',
  'img5w9.jpg' : 'NYC2'
}

/* Declaring the alternative text for each image file */

/* Looping through images */

for (const image of img) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
