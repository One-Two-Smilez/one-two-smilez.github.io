"use strict";

var add_note = function() {
    var div_func = function () {
    var div = document.createElement('div');
    var li = document.createElement('li');
    var button = document.createElement('input');
        button.type = 'button';
        button.value = 'delete';
        button.onclick = delete_note;
    div.appendChild(li).innerHTML = document.getElementById('input_data').value;
    document.getElementById('input_data').value = '';  // clear input data
    div.appendChild(button)
    return list.insertBefore(div, list.lastChild);
    }; div_func();
};
//================================================

var delete_note = function () {
  var row = this.parentNode.remove(this);
  return row;
};
