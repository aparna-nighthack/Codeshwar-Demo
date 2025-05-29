
// Initialize carousel for testimonials
$(document).ready(function() {
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Form validation logic
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).prop('required') && $(this).val() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        // Validate email
        const email = $('#email').val();
        if (!emailPattern.test(email)) {
            isValid = false;
            $('#email').addClass('error');
        } else {
            $('#email').removeClass('error');
        }

        if (isValid) {
            // Submit form data to the PHP handler
            $.ajax({
                url: 'contact_form_handler.php',
                type: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                    alert('Order placed successfully!');
                    $('#contactForm')[0].reset();
                },
                error: function() {
                    alert('There was an error processing your request. Please try again.');
                }
            });
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
});