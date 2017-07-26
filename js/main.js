
    $('#card').flip({
        axis: 'x',
        trigger: 'hover'
    });

    $.simpleTicker($('#demo'), {
        speed: 1000,
        delay: 3000,
        easing: 'swing',
        effectType: 'slide'
    });


/* CUSTOM JAVASCRIPT CODE - mouseover "open 24 hours" to view a special message */

    document.addEventListener('click', function () {
        document.getElementById('hours').textContent =
    'We look forward to meeting you!';
    });

/* CUSTOM Jquery CODE  - on click background of footerchanges, on hover
figcaption changes color */

    $('footer').on('click', function () {
        $('footer').addClass('change');
    });

    $('figcaption').mouseover(function () {
        $('figcaption').addClass('border');
    });
