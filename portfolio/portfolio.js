ScrollReveal({
	reset : true,
	distance:'80px',
	duration : 200,
	delay:300

});

ScrollReveal().reveal('.home-content ,.heading',{origin:'top' ,duration:5000});
ScrollReveal().reveal('.projects-box ',{origin : 'bottom' ,duration:3000});
ScrollReveal().reveal('.skills-column,.education-column',{origin : 'left' ,duration:3000});
// typed js
const typed= new Typed('.name',{
	strings: [' Frontend Developer '],
	typeSpeed :300,
	backSpeed:300,
	backDelay :300,
	loop:true
});
