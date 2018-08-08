function showPrompt(html, callback) {
  let p = form.getElementsByTagName('P')[0];
  p.innerHTML = html;
  form.onsubmit = function() {
    let data = form.userdata.value;
    if (data == '') return false;
    callback(data);
  };
  form.cancel.onclick = function () {
    callback(null);
    form.submit();
  };
  document.onkeydown = function(e) {
      if(e.key === 'Escape') {
        callback(null);
        return false;
      }
  };
}

button.onclick = function () {
  let div = document.createElement('DIV');
  div.id = 'div';
  document.body.append(div);
  container.style.display = 'block';
  showPrompt("Enter something<br>...smart :)", function(value) {
    alert(value);
  });
}
