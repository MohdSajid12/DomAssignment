console.log(document.all[10]);

var headerTitle = document.getElementById('header-title');

headerTitle.style.borderBottom= 'solid 3px #0000';



var items = document.getElementsByClassName('list-group-item');

items[3].style.backgroundColor ='green';



for(var i=0 ;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}
