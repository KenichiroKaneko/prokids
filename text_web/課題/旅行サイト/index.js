$('#start, #end').datepicker({
    format: "yyyy/mm/dd",
    language: "ja"
});

var bgs = ['#cover', '#okinawa', '#singapore', '#kyoto', '#china'];
var index = 0;

$('#right-btn').click(function () {
    var prev = index;
    index++;
    index %= 5;
    $(bgs[prev]).fadeOut();
    $(bgs[index]).fadeIn();
});

$('#left-btn').click(function () {
    var prev = index;
    index--;
    if (index < 0) {
        index = 4;
    }
    $(bgs[prev]).fadeOut();
    $(bgs[index]).fadeIn();
});

$('.page-title').click(function () {
    $('html, body').animate({ scrollTop: 0 });
});