colors = ['red', 'blue', 'green', 'black', 'grey', 'yellow'];
function giveColors() {
  let idx = 0;
  let table = document.getElementsByTagName('TABLE')[0];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = colors[idx];
      cell.id = '#' + idx;
      idx ++;
    }
  }
  return table;
}
function paint() {
  let table = giveColors();
  let X = canvas.getBoundingClientRect().left;
  let Y = canvas.getBoundingClientRect().top;
  let paint = canvas.getContext("2d");
  let prevX = -1, prevY = -1;
  paint.strokeStyle = '#FF0000';
  paint.fillStyle = "#FF0000";
  function draw(e) {
    if(prevX == -1 && prevY == -1) {
      paint.fillRect(e.clientX - X, e.clientY - Y, 4, 4);
      prevX = e.clientX - X;
      prevY = e.clientY - Y;
    } else {
      paint.moveTo(prevX, prevY);
      paint.lineTo(e.clientX - X, e.clientY - Y);
      paint.stroke();
      paint.lineWidth = 2;
      prevX = e.clientX - X;
      prevY = e.clientY - Y;

    }
  }
  document.onmousedown = function() {
    canvas.addEventListener('mousemove', draw);
  }
  document.onmouseup = function() {
    canvas.removeEventListener('mousemove', draw);
  }
  button.onclick = function() {
    paint.clearRect(0, 0, canvas.width, canvas.height);
  }
  table.onclick = function(e) {
    paint.fillStyle = e.target.id[1];
    paint.strokeStyle = e.target.id[1];
  }
}

paint();
