$(document).ready(function () {

    $('.run-button').click( function () {

        let loadTime = +$('input').val();

        console.log(loadTime);
        console.log("T0: " + performance.now());

        $('.potential-loader').showProgress(loadTime * 1000);

    });

    $('input').keypress(function (e) {
       if(e.which == 13) {
           $('.run-button').click();
       }
    });

});