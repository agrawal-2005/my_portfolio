var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editior'],
    typeSpeed: 50,
});

// Assuming you have already defined `links` and `contents`
const links = document.querySelectorAll('.link');
const contents = document.querySelectorAll('.contents');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    links.forEach(l => l.classList.remove('activelink'));
    
    // Add active class to the clicked link
    link.classList.add('activelink');
    
    // Hide all contents
    contents.forEach(content => content.classList.remove('active-tab'));
    
    // Show the corresponding content
    contents[index].classList.add('active-tab');
  });
});

document.querySelector('#menuToggle').addEventListener('click', ()=> {
    let menu = document.getElementById('menu');
    menu.classList.toggle('right-[0px]');
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx23I-GlToKWFmTg-qGHXOF1yD1q2T3oq2BPr0kuSCXzHxkFo0X6kCUm_5ljfjfJli8YA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})