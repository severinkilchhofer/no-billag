$(document).foundation();

$(document).ready(function () {
    var el = $('.innerfade li'),
        i = 0;
    $(el[0]).show();

    (function loop() {
        el.delay(200).fadeOut(0).eq(++i % el.length).fadeIn(0, loop);
    }());
});
