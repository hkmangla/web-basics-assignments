colors = ['red', 'blue', 'green', 'black', 'grey', 'yellow'];
function setColors() {
  let idx = 0;
  let table = document.getElementsByTagName('TABLE')[0];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = colors[idx];
      cell.title = colors[idx];
      cell.id = '#' + idx;
      idx ++;
    }
  }
  return table;
}
function paint() {
  let table = setColors();
  let offsetX = canvas.getBoundingClientRect().left;
  let offsetY = canvas.getBoundingClientRect().top;
  let paint = canvas.getContext("2d");
  let prevX = -1, prevY = -1;
  paint.strokeStyle = '#FF0000';
  paint.fillStyle = "#FF0000";
  function draw(e, lineWidth) {
    let currX = e.clientX, currY = e.clientY;
    if(prevX == -1 && prevY == -1) {
      paint.fillRect(currX - offsetX, currY - offsetY, lineWidth, lineWidth);
      prevX = currX - offsetX;
      prevY = currY - offsetY;
    } else {
      paint.beginPath();
      paint.moveTo(prevX, prevY);
      paint.lineTo(currX - offsetX, currY - offsetY);
      paint.stroke();
      paint.lineWidth = lineWidth;
      prevX = currX - offsetX;
      prevY = currY - offsetY;

    }
  }
  function drawWithFill(e) {
    draw(e, 2);
  }
  document.onmousedown = function(e) {
    e.preventDefault();
    if(e.target.tagName === 'CANVAS') {
      canvas.addEventListener('mousemove', drawWithFill);
    }
    if(e.target.id === 'eraser') {
      document.addEventListener('mousemove', erase);
    }
  }
  document.onmouseup = function() {
    eraser.style.position = 'static';
    document.removeEventListener('mousemove', erase);
    canvas.removeEventListener('mousemove', drawWithFill);
    prevX = -1, prevY = -1;
  }
  clearCanvas.onclick = function() {
    paint.clearRect(0, 0, canvas.width, canvas.height);
  }
  colorTable.onclick = function(e) {
    paint.fillStyle = colors[+e.target.id[1]];
    paint.strokeStyle = colors[+e.target.id[1]];
  }
  function erase(e) {
    eraser.style.position = 'absolute';
    eraser.style.zIndex = 100;
    eraser.style.left = e.clientX - eraser.clientWidth + 'px';
    eraser.style.top = e.clientY - eraser.clientHeight + 'px';
    paint.fillStyle = "#FFFFFF";
    paint.strokeStyle = "#FFFFFF";
    draw(e,30);
  }
}
paint();
