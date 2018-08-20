$(document).ready(function () {
    $('.error').hide();
    $('.wrapper').hide();
    $('.run-button').click(function () {
        let loadTime = +$('input').val();
        console.log(loadTime);
        console.log("T0: " + performance.now());
        $('.wrapper').showProgress(loadTime*1000);

    });
});