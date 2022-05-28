// var text=document.querySelector("#text")
// for(var i=1;i<5;i++){
//     text=text.innerText="Masai school"+" "+i
//     text.append(text)
// }


var listElm = document.querySelector('#infinite-list');
 
// Add 25 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}
 
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});
 
loadMore();





