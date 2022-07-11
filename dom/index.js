console.log(document.all[10]);

var headerTitle = document.getElementById('header-title');

headerTitle.style.borderBottom= 'solid 3px #0000';



var items = document.getElementsByClassName('list-group-item');

items[3].style.backgroundColor ='green';



for(var i=0 ;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}


var secondItem = document.querySelector('.list-group');

 secondItem.children[2].style.backgroundColor='green';

 secondItem.children[3].style.display ='none';



 var ite = document.querySelectorAll('li')
 ite[2].style.color = 'green';


var odd = document.querySelectorAll('li :nth-child(odd)');
for(var i=0; i<odd.lenngth; i++)
{
    odd[i].style.backgroundColor = 'green';
}
