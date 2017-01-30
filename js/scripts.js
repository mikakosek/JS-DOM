var list = document.getElementById('js-list'),    
    addItem = document.getElementById('js-addItem');

addItem.addEventListener('click', function(e) {
    var newItem = document.createElement('li');
    newItem.innerHTML = "item " + list.getElementsByTagName('li').length;
    list.appendChild(newItem);
});
