$(document).foundation();

$(document).ready(function () {
    var el = $('.innerfade li'),
        i = 0;
    $(el[0]).show();

    (function loop() {
        el.delay(150).fadeOut(0).eq(++i % el.length).fadeIn(0, loop);
    }());

    $('.opacity-feed').each(
        function (i, el) {
            $(el).mouseover(
                function () {
                    $('.opacity-feed').addClass('over');
                    $(el).removeClass('over');
                }
            )
        }
    );
});
