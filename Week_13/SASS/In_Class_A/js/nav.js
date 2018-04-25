$(function() {

    $('#dropdown').slideUp(0);

    // activate mobile nav
    $('#nav-collapse').click(function(event) {
        $(this).toggleClass('change');
        $('#dropdown').slideToggle(500);
    });

    $('.menu-toggle').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('data-dropdown');
        if ($(this).hasClass('active')) {
            $('*').removeClass('active');

            $('#dropdown').slideUp(500);
            $('.brand').removeClass('open');
            $('#nav-spacer').removeClass('nav-open');

        } else {
            $('*').removeClass('active');
            $(this).addClass('active');
            $(target).addClass('active');

            $('#dropdown').slideDown(500);

            $('.brand').addClass('open');
            $('#nav-spacer').addClass('nav-open');
        }

    });
});
