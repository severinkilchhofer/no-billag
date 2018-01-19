$(document).foundation();

$(function () {
    $.scrollify({
        section: ".view-section"
    });
});

$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
afterRender:function() {}
});

$(document).ready(function () {
    $('input[type=button]').click(function () {
        $('#toggleEvent').toggleClass('active');
    });
});