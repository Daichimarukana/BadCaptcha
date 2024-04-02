window.onload = function() {
    fetch('/js/captcha.html')
        .then(response => response.text())
        .then(data => {
            if($('.intCaptcha').length){
                $('.intCaptcha').html(data);
                $('.intCaptcha_trybox').click(function(){
                    $('.intCaptcha_trybox').children().children().children('.chk').addClass('delchk');
                    setTimeout(function(){
                        $('.intCaptcha_trybox').children().children().children('.chk').remove();
                    },250);
                    change_zone = $('.intCaptcha_trybox').children().children().children('#click');
                    change_zone.html('<div class="loading"><p>🤔</p></div>');
                    setTimeout(function(){
                        change_zone.remove();
                    },3000);
                    setTimeout(function(){
                        $('.intCaptcha_trybox').children().children('.leftzone').html('<div><h1>あなたはロボットです。</h1><p>すべてをロボットと判断すれば安全ですからね</p></div>');
                    },3250);
                });
            }
        })
}