$('#zip-btn').click(function () {
    var param = { zipcode: $('#zipcode').val() };
    var send_url = "https://zipcloud.ibsnet.co.jp/api/search";
    console.log(param);
    $.ajax({
        type: 'GET',
        cache: false,
        data: param,
        url: send_url,
        dataType: 'jsonp'
        // beforeSend: function () {
        //     $('.loading').removeClass('hide');
        // }
        // success: function (res) {
        //     if (res.status == 200) {
        //         if (res.results != null) {
        //             var result = res.results[0];
        //             var pref = result.address1;
        //             var city = result.address2 + result.address3;
        //             $('#prefecture').val(pref);
        //             $('#city').val(city);
        //         } else {
        //             // $('#msg').html('住所が表示できません');
        //             $('#prefecture').val('');
        //             $('#city').val('');
        //         }
        //     } else {
        //         console.log(res.message);
        //     }
        // }
    })
        .done(function (res) {
            // $('.loading').addClass('hide');
            if (res.status == 200) {
                if (res.results != null) {
                    var result = res.results[0];
                    var pref = result.address1;
                    var city = result.address2 + result.address3;
                    $('#prefecture').val(pref);
                    $('#city').val(city);
                } else {
                    // $('#msg').html('住所が表示できません');
                    $('#prefecture').val('');
                    $('#city').val('');
                }
            } else {
                console.log(res.message);
            }
        })
});

$('.page-title').click(function () {
    $('html, body').animate({ scrollTop: 0 });
});

$(function () {
    $('.send-btn').prop("disabled", true);
    $('form .required').change(function () {
        var flag = true;
        $('form .required').each(function (index) {
            if ($('.required').eq(index).val() === "") {
                flag = false;
            }
        });
        if (flag) {
            $('.send-btn').prop("disabled", false);
        } else {
            $('.send-btn').prop("disabled", true);
        }
    });
});