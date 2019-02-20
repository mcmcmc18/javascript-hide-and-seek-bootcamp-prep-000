function getFirstSelector(selector) {
  return  document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    let child = list[i].children;
  for (let t = 0; t < child.length; t++){
    child[t].innerHTML = parseInt(child[t].innerHTML) + n;
    }
  }
}

function deepestChild(){
  var nodeList = document.getElementById('grand-node').querySelectorAll("div");
  var moreNodes;
  for (let i = 0; i < nodeList.length-1; i++){
    moreNodes = nodeList[i].querySelector("div")
  }
  return moreNodes;
}
