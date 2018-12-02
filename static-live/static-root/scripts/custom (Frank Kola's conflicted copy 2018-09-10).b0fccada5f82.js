$(window).load(function () { // makes sure the whole site is loaded

	"use strict";



	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------   
	$('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('#preloader .inner').fadeOut(); // will first fade out the loading animation


	//------------------------------------------------------------------------
	//						WOW ANIMATION SETTINGS
	//------------------------------------------------------------------------ 	
	var wow = new WOW({
		offset: 100, // distance to the element when triggering the animation (default is 0)
		mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();



	//------------------------------------------------------------------------
	//						STELLAR (PARALLAX) SETTINGS
	//------------------------------------------------------------------------ 	
	if (!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
		$.stellar({
			horizontalScrolling: false,
			positionProperty: 'transform'
		});
	}



	//------------------------------------------------------------------------
	//						NAVBAR SLIDE SCRIPT
	//------------------------------------------------------------------------ 		
	$(window).scroll(function () {
		if ($(window).scrollTop() > $("nav").height()) {
			$("nav.navbar-slide").addClass("show-menu");
		} else {
			$("nav.navbar-slide").removeClass("show-menu");
			$(".navbar-slide .navMenuCollapse").collapse({
				toggle: false
			});
			$(".navbar-slide .navMenuCollapse").collapse("hide");
			$(".navbar-slide .navbar-toggle").addClass("collapsed");
		}
	});

})




$(document).ready(function () {

	"use strict";



	//------------------------------------------------------------------------
	//						ANCHOR SMOOTHSCROLL SETTINGS
	//------------------------------------------------------------------------
	$('a.goto, .navbar .nav a').smoothScroll({
		speed: 1200
	});




	//------------------------------------------------------------------------
	//						FULL HEIGHT SECTION SCRIPT
	//------------------------------------------------------------------------
	$("#minimal-intro").css("min-height", $(window).height());
	$(window).resize(function () {
		$("#minimal-intro").css("min-height", $(window).height());
	})




	//------------------------------------------------------------------------
	//						INTRO SUPERSLIDER SETTINGS
	//------------------------------------------------------------------------
	$("#slides").superslides({
		play: 8000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
		animation: "fade", //slide or fade. This matches animations defined by fx engine.
		pagination: false,
		inherit_height_from: ".intro-block",
		inherit_width_from: ".intro-block"
	});




	//------------------------------------------------------------------------
	//						services SLIDER SETTINGS
	//------------------------------------------------------------------------
	var owl = $("#services-slider");
	owl.owlCarousel({
		items: 5,
		itemsDesktop: [1400, 4],
		itemsDesktopSmall: [1200, 3],
		itemsTablet: [900, 2],
		itemsMobile: [600, 1],
		stopOnHover: true
	});



	//------------------------------------------------------------------------
	//						TESTIMONIALS SLIDER SETTINGS
	//------------------------------------------------------------------------
	var owl = $("#testimonials-slider");
	owl.owlCarousel({
		singleItem: true,
		autoPlay: 5000,
		stopOnHover: true
	});



	//------------------------------------------------------------------------	
	//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
	//------------------------------------------------------------------------  

	$('#services-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});



	//------------------------------------------------------------------------
	//					SUBSCRIBE FORM VALIDATION'S SETTINGS
	//------------------------------------------------------------------------          
	$('#subscribe_form').validate({
		onfocusout: false,
		onkeyup: false,
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		errorPlacement: function (error, element) {
			error.appendTo(element.closest("form"));
		},
		messages: {
			email: {
				required: "We need your email address to contact you",
				email: "Please, enter a valid email"
			}
		},

		highlight: function (element) {
			$(element)
		},

		success: function (element) {
			element
				.text('').addClass('valid')
		}
	});




	//------------------------------------------------------------------------------------
	//						SUBSCRIBE FORM MAILCHIMP INTEGRATIONS SCRIPT
	//------------------------------------------------------------------------------------		
	$('#subscribe_form').submit(function () {
		$('.error').hide();
		$('.error').fadeIn();
		// submit the form
		if ($(this).valid()) {
			$('#subscribe_submit').button('loading');
			var action = $(this).attr('action');
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					newsletter_email: $('#subscribe_email').val()
				},
				success: function (data) {
					$('#subscribe_submit').button('reset');

					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>' + data);
					$('#modalMessage').modal('show');

				},
				error: function () {
					$('#subscribe_submit').button('reset');

					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');

				}
			});
		}
		return false;
	});




	//------------------------------------------------------------------------------------
	//						CONTACT FORM VALIDATION'S SETTINGS
	//------------------------------------------------------------------------------------		  
	$('#contact_form').validate({
		onfocusout: false,
		onkeyup: false,
		rules: {
			name: "required",
			message: "required",
			email: {
				required: true,
				email: true
			}
		},
		errorPlacement: function (error, element) {
			error.insertAfter(element);
		},
		messages: {
			name: "What's your name?",
			message: "Type your message",
			email: {
				required: "What's your email?",
				email: "Please, enter a valid email"
			}
		},

		highlight: function (element) {
			$(element)
				.text('').addClass('error')
		},

		success: function (element) {
			element
				.text('').addClass('valid')
		}
	});




	//------------------------------------------------------------------------------------
	//								CONTACT FORM SCRIPT
	//------------------------------------------------------------------------------------	

	$('#contact_form').submit(function () {
		// submit the form
		if ($(this).valid()) {
			$('#contact_submit').button('loading');
			var action = $(this).attr('action');
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					contactname: $('#contact_name').val(),
					contactemail: $('#contact_email').val(),
					contactmessage: $('#contact_message').val()
				},
				success: function () {
					$('#contact_submit').button('reset');
					$('#modalContact').modal('hide');

					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>Well done!<br>Your message has been successfully sent!');
					$('#modalMessage').modal('show');
				},
				error: function () {
					$('#contact_submit').button('reset');
					$('#modalContact').modal('hide');

					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');
				}
			});
		} else {
			$('#contact_submit').button('reset')
		}
		return false;
	});



});

(function ($) {
	"use strict";

	// Options for Message
	//----------------------------------------------
	var options = {
		'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
		'btn-success': '<i class="fa fa-check"></i>',
		'btn-error': '<i class="fa fa-remove"></i>',
		'msg-success': 'All Good! Redirecting...',
		'msg-error': 'Wrong login credentials!',
		'useAJAX': true,
	};

	// Login Form
	//----------------------------------------------
	// Validation
	$("#login-form").validate({
		rules: {
			lg_username: "required",
			lg_password: "required",
		},
		errorClass: "form-invalid"
	});

	// Form Submission
	$("#login-form").submit(function () {
		remove_loading($(this));

		if (options['useAJAX'] == true) {
			// Dummy AJAX request (Replace this with your AJAX code)
			// If you don't want to use AJAX, remove this
			dummy_submit_form($(this));

			// Cancel the normal submission.
			// If you don't want to use AJAX, remove this
			return false;
		}
	});

	// Register Form
	//----------------------------------------------
	// Validation
	$("#register-form").validate({
		rules: {
			reg_username: "required",
			reg_password: {
				required: true,
				minlength: 5
			},
			reg_password_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#register-form [name=reg_password]"
			},
			reg_email: {
				required: true,
				email: true
			},
			reg_agree: "required",
		},
		errorClass: "form-invalid",
		errorPlacement: function (label, element) {
			if (element.attr("type") === "checkbox" || element.attr("type") === "radio") {
				element.parent().append(label); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
			} else {
				label.insertAfter(element); // standard behaviour
			}
		}
	});

	// Form Submission
	$("#register-form").submit(function () {
		remove_loading($(this));

		if (options['useAJAX'] == true) {
			// Dummy AJAX request (Replace this with your AJAX code)
			// If you don't want to use AJAX, remove this
			dummy_submit_form($(this));

			// Cancel the normal submission.
			// If you don't want to use AJAX, remove this
			return false;
		}
	});

	// Forgot Password Form
	//----------------------------------------------
	// Validation
	$("#forgot-password-form").validate({
		rules: {
			fp_email: "required",
		},
		errorClass: "form-invalid"
	});

	// Form Submission
	$("#forgot-password-form").submit(function () {
		remove_loading($(this));

		if (options['useAJAX'] == true) {
			// Dummy AJAX request (Replace this with your AJAX code)
			// If you don't want to use AJAX, remove this
			dummy_submit_form($(this));

			// Cancel the normal submission.
			// If you don't want to use AJAX, remove this
			return false;
		}
	});

	// Loading
	//----------------------------------------------
	function remove_loading($form) {
		$form.find('[type=submit]').removeClass('error success');
		$form.find('.login-form-main-message').removeClass('show error success').html('');
	}

	function form_loading($form) {
		$form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
	}

	function form_success($form) {
		$form.find('[type=submit]').addClass('success').html(options['btn-success']);
		$form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
	}

	function form_failed($form) {
		$form.find('[type=submit]').addClass('error').html(options['btn-error']);
		$form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
	}

	// Dummy Submit Form (Remove this)
	//----------------------------------------------
	// This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
	function dummy_submit_form($form) {
		if ($form.valid()) {
			form_loading($form);

			setTimeout(function () {
				form_success($form);
			}, 2000);
		}
	}

})(jQuery);
