function functionDeclaration() {
  var name;
  console.log(name);
}
let functionExpreesion = function() {
  var name;
  console.log(name);
};
let arrowFunction = () => {
  var name;
  console.log(name);
};
// let name = prompt("Who are you?", "Your name");
// alert('Hi ' + name);
// document.write("<h1>Hello World</h1>");
function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

function selectWord() {
  let elements = document.getElementsByTagName("P");
  elements[0].innerHTML += "<b>Hey</b>";
  alert(elements[0].innerHTML);
}

function task1() {
  let li, ul = document.createElement('ul');
  ul.innerHTML = "<h1>Create a List</h1>";
  document.body.append(ul);

  let name = prompt("Element you want to add in the list.", "Element Name");

  while (name != null) {
      li = document.createElement('li');
      li.textContent = name;

      ul.append(li);

      name = prompt("Element you want to add in the list.", "Element Name");
  }
}

function task2() {
  let div = document.createElement('div');
  div.innerHTML = "<h2>Tree</h2>";
  div.id = 'container';
  document.body.append(div);

  let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "redbud": {},
        "magnolia": {}
      }
    }
  };
  let container = document.getElementById('container');

  function createTree(container, data) {

      let ul = document.createElement('ul');
      container.append(ul);

      for (let key in data) {
        let li = document.createElement('li');
        li.textContent = key;

        if (data[key]) {
          createTree(li, data[key]);
        }

        ul.append(li);
      }
  }
  createTree(container, data);
}

function task3() {
  function createIfFirst(first, elem, id){
    let element;
    if (first) {
        element = document.createElement(elem);
        element.id = id;
    } else {
      element = document.getElementById(id);
    }
    return element;
  }
  function createCalendarHeading(table) {
    let months = [undefined, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    let cap = table.createCaption();
    cap.innerHTML = months[month] + " " + year;
    cap.style.fontWeight = 'bold';
    cap.style.fontSize = '25px';
    let heading = document.createElement('tr');

    for (let day in days) {
      let th = document.createElement('th');
      th.textContent = days[day];
      th.style.backgroundColor = 'rgb(220,220,220)';
      heading.append(th);
    }
    table.append(heading);
  }
  function createCalendar(elem, year, month, first=false) {

    let table = createIfFirst(first, 'table', 'table');
    table.innerHTML = "";
    createCalendarHeading(table);

    let date = new Date(year, month, 0);
    let totalDays = date.getDate();
    date = new Date(year, month-1);
    let firstDay = date.getDay();
    firstDay = firstDay ? firstDay : 7;
    let currDay = 1;
    let calender = {};
    let currRow = 0;
    calender[currRow] = "";
    while (currDay <= totalDays) {
      if (firstDay > 1 && calender[currRow] == "") {
        let day = firstDay;
        while (day != 1) {
          calender[currRow] += "<td></td>";
          day --;
        }
      }
      calender[currRow] += `<td>${currDay}</td>`;

      if (currDay == totalDays && firstDay <= 7) {
        while (firstDay < 7) {
          calender[currRow] += '<td></td>';
          firstDay ++;
        }
        calender[currRow] += '</tr>';
        break;
      }

      firstDay += 1;
      firstDay = (firstDay > 7) ? 1 : firstDay;
      if (firstDay == 1) {
        calender[currRow] += '</tr>';
        currRow += 1;
        calender[currRow] = "<tr>";
      }

      currDay += 1;
    }
    for (let row in calender) {
      table.innerHTML += calender[row];
    }
    // if()
    table.setAttribute('border', 1);
    table.style.borderCollapse = 'collapse';
    table.style.margin = 'auto';
    // table.position = 'relative';
    if(first) {
      elem.append(table);
    }
      let tableElem = document.querySelectorAll('table *');
      tableElem.forEach(function(elem) {
        elem.style.cssText += "padding:5px; \
                              text-align:center; \
                              ";
      });
    // }
  }
  var year = 2012;
  var month = 9;
  createCalendar(document.body, year, month, true);


  function showPrevCalender() {
    month --;
    if (month == 0) {
      year --;
      month = 12;
    }
    createCalendar(document.body, year, month);
  }
  function showNextCalender() {
    month ++;
    if (month == 13) {
      year ++;
      month = 1;
    }
    createCalendar(document.body, year, month);
  }
  let prevButton = document.createElement('button');
  prevButton.innerHTML = "&ltprev";
  // prevButton.style.position = 'fixed';
  // prevButton.style.top = '530px';
  // prevButton.style.left = window.innerWidth / 2 - table.clientWidth / 2 + "px";
  prevButton.onclick = showPrevCalender;
  let nextButton = document.createElement('button');
  nextButton.id = 'button';
  prevButton.id = 'button';
  document.body.append(prevButton);
  document.body.append(nextButton);
  nextButton.innerHTML = "next>";
  // nextButton.style.position = 'fixed';
  // nextButton.style.top = '530px';
  // nextButton.style.left = window.innerWidth / 2 + table.clientWidth / 2 -
                          // nextButton.clientWidth+ "px";
  nextButton.onclick = showNextCalender;
  document.body.style.textAlign = 'center';
  let selectedTD = null;
  document.body.onclick = function(event) {
    let target = event.target;
    if(target.tagName != 'TD') {
      if(selectedTD) popDown(selectedTD);
      return;
    }
    else {
      if(selectedTD) popDown(selectedTD);
      popUp(target);
      selectedTD = target;
    }
  };

  function popUp(id) {
    id.style.position = 'absolute';
    id.style.backgroundColor = 'green';
    id.style.zIndex = 1;
    id.style.transform = 'scale(2,2)';
  }
  function popDown(id) {
    id.style.position = 'static';
    id.style.zIndex = 0;
    id.style.backgroundColor = 'white';
    id.style.padding = '3px';
    id.style.transform = 'scale(1,1)';
  }
}

// task3();

function parent() {
  function child() {
    alert('y');
  }
}

function task4() {
  let thumb = document.querySelector('.thumb');
  let slider = document.querySelector('.slider');
  let start = slider.getBoundingClientRect().left;
  let end = start + slider.clientWidth;
  thumb.onmousedown = function(event) {
    event.preventDefault();
    moveAt(event.pageX);
    function moveAt(pageX) {
      if(pageX <= end && pageX >= start) {
        // console.log(pageX-start);
        thumb.style.left = pageX - start + 'px';
      }
    }
    function moveAtT(event) {
      moveAt(event.pageX);
    }
    document.addEventListener('mousemove', moveAtT);
    document.addEventListener('mouseup', moveUp);

    function moveUp() {
      document.removeEventListener('mousemove', moveAtT);
      document.removeEventListener('mouseup', moveUp);
    }
  };
  thumb.onDragStart = function() {
    return false;
  };
}
task4();
