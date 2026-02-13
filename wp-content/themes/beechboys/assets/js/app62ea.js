jQuery(function() {
	$ = jQuery;

	$('body').addClass('loading');
	setTimeout(function() {
		$('body').removeClass('loading');
	}, 400);

	$('[data-countup]').each(function() {
		$(this).removeClass('is-counting');
		var startVal = $(this).data('countup') - (($(this).data('countup') / 100) * 60);
		var numAnim = new countUp(this, startVal, $(this).data('countup'), 0, 1.5);
		var position = $(this).position();
		$(this).waypoint(function() {
			$(this).addClass('is-counting');
			if(numAnim.remaining == null) { numAnim.start(); }
		}, { offset: '90%' });
	});

	var images = new Array();
	$('.popup').each(function(i) {
		images[i] = new Image();
		images[i].src = $(this).attr('href');
	});

	$('.js-countdown').each(function() {
		$(this).countdown($(this).data('to') || '2014/08/31 15:00:00', function(event) {
			$(this).html(event.strftime(''
			+	'<div class="unit"><span class="unit__value">%D</span> <span class="unit__label">day%!D</span></div>'
			+	'<div class="unit"><span class="unit__value">%H</span> <span class="unit__label">hour%!H</span></div>'
			+	'<div class="unit"><span class="unit__value">%M</span> <span class="unit__label">minute%!M</span></div>'
			+	'<div class="unit"><span class="unit__value">%S</span> <span class="unit__label">second%!S</span></div>'
			));
		});
	});

	$('.popup, .wp-caption a').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    preload: true,
    mainClass: 'mfp-no-margins mfp-with-zoom mfp-fade',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

});
