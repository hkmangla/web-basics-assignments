jQuery.fn.warning = function () {
    return this.each(function () {
        alert('Tag name ' + $(this).prop('tagName') + '.');
    })
};

jQuery.fn.showProgress = function (loadTime) {

    if(isNaN(loadTime) || loadTime == 0) {
        $('.error').show();
        return $(this);
    } else {
        $('.error').hide();
    }
    
    let leftFill = $(this).children().find('.mask.left').children();
    let rightFill = $(this).children().find('.mask.right').children();
    let halfLoadTime = loadTime / 2;
    $(this).show();

    let countDiv = $(this).children().find('.count-value');
    leftFill.animate(
        {borderSpacing: 180},
        {
            step: function (now) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: halfLoadTime,
            easing: 'linear'
        });
    rightFill.delay(halfLoadTime).animate(
        {borderSpacing: 180},
        {
            step: function (now) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: halfLoadTime,
            easing: 'linear'
        });
    let count = 0;
    countDiv.text(count);
    let timePeriod = loadTime / 100;
    let interval;
    
    function exitLoader() {
        leftFill.css({'border-spacing': '0', 'transform': 'rotate(0deg)'});
        rightFill.css({'border-spacing': '0', 'transform': 'rotate(0deg)'});
        $(this).hide();
        $(this).unbind('click');
    }
    function update() {
        count += 1;
        if(count > 100) {
            clearInterval(interval);
            console.log("T1: " + performance.now());
            $(this).bind('click', exitLoader.bind(this));
        } else {
            countDiv.text(count);
        }
    }
    interval = setInterval(update.bind(this), timePeriod);

    return $(this);
};