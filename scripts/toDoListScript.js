// Add eventlisteners to Buttons.

listItemArray = [];

function eventListenersButtons(){
    const confirm = document.getElementById('confirmAddItem'); 
    confirm.onclick = takeInput; 

    const remove = document.getElementById('removeItem'); 
    remove.onclick = removeItemFromList;
 }

 function takeInput(){
    let input = document.getElementById('addItem').value;
    addNewItemToList(input);
 }

 // adds value to new li as textNode. 
 function addNewItemToList(input){

   listItemArray.push(input)
   console.log(listItemArray);
   
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.setAttribute("id", input);
    li.appendChild(document.createTextNode(input)); // gives all li differents textNodes with input text.
    ul.appendChild(li);
 }

 // removes li wich has the input text value.
function removeItemFromList() {
    const ul = document.getElementById("ul");
    const item = document.getElementById(addItem.value);

    for (let i = 0; i < listItemArray.length ; i++) {
      console.log(listItemArray[i])
   }

    ul.removeChild(item);
}
