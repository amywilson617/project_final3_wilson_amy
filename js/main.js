
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


/* CUSTOM JAVASCRIPT CODE - click on "open 24 hours" to view a special message */

document.addEventListener('click', function () {
    document.getElementById('hours').textContent =
    'We look forward to hearing from you!';
});
