$('#datepicker').datepicker({
    format: "yyyy年mm月dd日",
    language: "ja",
    startView: 3,
    autoclose: true
});

$('.page-title').click(function () {
    $('html, body').animate({ scrollTop: 0 });
});

$(function () {
    $('.send-btn').prop("disabled", true);
    $('form .required').change(function () {
        var flag = true;
        var checked = $('#check').prop("checked");
        $('form .required-input').each(function (index) {
            if ($('.required-input').eq(index).val() === "") {
                flag = false;
            }
        });
        if ($('#email').val() != $('#email-check').val() || $('#password').val() != $('#password-check').val() || $('#password').val().length < 8) {
            flag = false;
        }
        if (flag && checked) {
            $('.send-btn').prop("disabled", false);
        } else {
            $('.send-btn').prop("disabled", true);
        }
    });
});