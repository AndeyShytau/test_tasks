var button = document.querySelector('.collapsible__button');
var hide = document.querySelector('.collapsible__action--visible');
var show = document.querySelector('.collapsible__action--hidden');

button.style.color = 'green';
button.style.border = '1px solid green';
button.style.height = '24px';
button.style.borderRadius = '8px';
hide.style.display = 'none';

const anim = document
    .querySelector('.collapsible__content')
    .animate([{
        opacity: 0
    }, ], {
        duration: 1,
        iterations: 1,
        fill: "both",
    });

hide.addEventListener('click', function () {
    anim.play();
});

show.addEventListener('click', function () {
    anim.cancel();
});

show.addEventListener('click',
    function () {
        hide.style.display = 'inline';
        show.style.display = 'none';
    });

hide.addEventListener('click',
    function () {
        hide.style.display = 'none';
        show.style.display = 'inline';
    });