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


var itemList = document.querySelector('#items')
console.log(itemList.parentElement);

console.log(itemList.lastElementChild);

console.log(itemList.lastChild);

console.log(itemList.firstElementChild);

console.log(itemList.firstChild);

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);


var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello2';

newDiv.setAttribute('titile' , 'hello div');

var newDivText = document.createTextNode("hello boy")
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

console.log(newDiv)
container.insertBefore(newDiv , h1);



var parentnode = document.getElementById('.list-group');
console.log(parentnode.innerHTML);

parentnode = '<li> hello </li>'+parentnode;



let element = document.createElement('li');
element.className  =  'list-group-item';
element.setAttribute('title' ,'mytitle');
element.innerText='item 5';

let ul = document.querySelector('ul.list-group');
let deletebtn = document.createElement('button');
deletebtn.className ='btn btn-danger btn-sm float-right delete';

deletebtn.appendChild(document.createTextNode('X'));
element.appendChild(deletebtn);

ul.appendChild(element);

console.log(ul);

console.log(element);


//REMOVE ITEMS

var form = document.getElementById('addForm');
//console.log(form);
var itemList = document.getElementById('items');
//console.log(itemList);
itemList.addEventListener('click' , removeItem)

function removeItem(e)
{
  //  console.log(1);
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);

    }
  }
}
