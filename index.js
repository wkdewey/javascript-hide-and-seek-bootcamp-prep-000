function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var element = document.querySelector('#nested .target');
  return element;
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = ((parseInt(lis[i])+1).toString());
  }
}


function deepestChild() {
  var current = document.querySelector('#grand-node');
  var next = [];
  while(current) {
    if(current.querySelector('div')) {
      for (let i = 0; i < current.length; i++) {
      next.push(current.querySelector('div'));
      }
    }
    
    current = next.shift();
  }
}