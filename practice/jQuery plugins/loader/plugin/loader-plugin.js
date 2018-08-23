function createProgressElements(parent) {
    parent.html("<div class=\"container\">\n" +
        "            <div class=\"radial-progress\">\n" +
        "                <div class=\"mask left\">\n" +
        "                    <div class=\"fill\"></div>\n" +
        "                </div>\n" +
        "                <div class=\"mask right\">\n" +
        "                    <div class=\"fill\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"loader-box\">\n" +
        "                <p class=\"loader\"><span class=\"count-value\" tabindex=\"1\">0</span>%</p>\n" +
        "            </div>\n" +
        "        </div>");

}
jQuery.fn.showProgress = function (loadTime) {

    if(isNaN(loadTime) || loadTime == 0) {
        alert("Invalid Load Time!");
        return $(this);
    }

    $(this).addClass('wrapper');
    createProgressElements($(this));

    let leftFill = $(this).children().find('.mask.left').children();
    let rightFill = $(this).children().find('.mask.right').children();
    let countDiv = $(this).children().find('.count-value');

    let halfLoadTime = loadTime / 2;
    countDiv.focus();
    countDiv.blur(function () {
       $(this).focus();
    });

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
        $(this).removeClass('wrapper')
               .html("")
               .unbind('click');
    }

    function update() {
        count += 1;
        if(count > 100) {
            clearInterval(interval);
            console.log("T1: " + performance.now());
            $('.container').append("<p class='exit-message'>Click Anywhere to exit..</p>");
            $(this).bind('click', exitLoader.bind(this));
        } else {
            countDiv.text(count);
        }
    }
    interval = setInterval(update.bind(this), timePeriod);

    return $(this);
};