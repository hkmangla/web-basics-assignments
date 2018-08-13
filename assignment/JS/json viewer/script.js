$(document).ready(function () {
    let jsonObject = $.getJSON("sample.json", function(data) {
        let html = "";

        function filter(key) {
            if(key[0] == '@') return key.substring(1);
            return key;
        }
        function createTree(node) {
            for (let item in node) {
                if (typeof(node[item]) == 'object') {
                    html += '<div class="object-header box"><b>' + filter(item) + '</b></div>';
                    html += '<div class="object-container">';
                    createTree(node[item]);
                    html += '</div>';
                } else {
                    html += '<div class="key-value box">';
                    html += '<div class="key"><b>' + filter(item) + '</b></div>';
                    html += '<div class="value">' + node[item] + '</div></div>';
                }
            }
        }
        createTree(data['attributes']);
        $('.container').html(html);
    });
});