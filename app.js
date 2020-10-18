function ready() {
	var screenWidth = $(window).width();
	$(window).on("resize load", function(){
		screenWidth = $(window).width();
		console.log(screenWidth);
	});
	
	function inViewport(curved) {
		var H = $(window).height(),
			r = curved.getBoundingClientRect(), t=r.top, b=r.bottom;
		return Math.max(0, t>0? H-t : (b<H?b:H));
	}
	
	$(window).on("scroll resize load", function(){
		[...document.querySelectorAll('.curved-effect')].map(curved => {

			const window_offset = inViewport(curved); 
			const overlay = curved.querySelector('.curved-effect__overlay');
			const image = curved.querySelector('.curved-effect__img-container>.main-screen__image:nth-child(2)');

			if (!(curved).matches('.no-anim')) {
				$(overlay).height(window_offset / .75);
				$(image).css('bottom', (window_offset / 2.5) );
			}
			
		});
	});
	
	$(document).mousemove(function(e) {
		// let screenWidth = $(window).width();
		let screenHeight = $(window).height();
		$(".mouse-parallax").css({
			transform: "translate(" + e.pageX/screenWidth * 45 + "px, " + e.pageY/screenHeight * 45 * -1 + "px)"
		});
		$(".mouse-parallax--2").css({
			transform: "translate(" + e.pageX/screenWidth * 45 * -1 + "px, " + e.pageY/screenHeight * 20 + "px)"
		});
	});
};
document.addEventListener("DOMContentLoaded", ready);
