jQuery.fn.warning = function () {
    return this.each(function () {
        alert('Tag name ' + $(this).prop('tagName') + '.');
    })
};

jQuery.fn.showProgress = function (loadTime) {
    let count = 0;
    let timePeriod = loadTime / 100;
    let interval;
    function update() {
        count += 1;
        if(count > 100) {
            clearInterval(interval);
        } else {
            $(this).text(count);
        }
    }
    interval = setInterval(update.bind(this), timePeriod);

    return $(this);
};