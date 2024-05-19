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
