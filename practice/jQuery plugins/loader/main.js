$(document).ready(function () {
    $('.error').hide();
    $('.wrapper').hide();
    $('.run-button').click(function () {
        let loadTime = +$('input').val();
        console.log(loadTime);
        if(isNaN(loadTime) || loadTime == 0) {
            $('.error').show();
            return;
        } else {
            $('.error').hide();
            $('.wrapper').show();

        }
        $('.count-value').showProgress(loadTime*1000);
    });
});