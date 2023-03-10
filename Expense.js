function saveToLocalStorage(event) {
    event.preventDefault();
    const userid = Math.floor(1000 * Math.random());
    const expenseamount = event.target.expenseamount.value;
    const discription = event.target.discription.value;
    const category = event.target.category.value;

    const obj = {

        userid,
        expenseamount,
        discription,
        category
    }

    localStorage.setItem(obj.discription, JSON.stringify(obj));
    showUserOnScreen(obj)

}
window.addEventListener("DOMContentLoaded", () => {
    const local = localStorage;
    const babukey = Object.keys(local)


    for (var i = 0; i < babukey.length; i++) {
        const key = babukey[i];
        const Mitthukey = local[key];
       const userdetailsobj =JSON.parse(Mitthukey);
       showUserOnScreen(userdetailsobj)
}

})







function showUserOnScreen(obj) {


    document.getElementById('expenseamount').value = '';
    document.getElementById('discription ').value = '';
    document.getElementById('category').value = '';



    const parentElem = document.getElementById('listOfitem');
    const childElem = document.createElement('li');
    childElem.textContent = obj.expenseamount + '-' + obj.discription + '-' + obj.category
    // parentElem.appendChild(childElem);


    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "delete expenses";


    deleteButton.onclick = () => {
        document.getElementById('expenseamount').value = '';
        document.getElementById('discription').value = '';
        document.getElementById('category').value = '';

        // localStorage.removeItem(obj.expenseamount)
        
        // localStorage.removeItem(obj.discription)
 
        // localStorage.removeItem(obj.category)


        // parentElem.removeChild(childElem);
        parentElem.removeChild(childElem);
}

    const deleteButton2 = document.createElement('input');
    deleteButton2.type = "button";
    deleteButton2.value = "Edit expense";
    deleteButton2.onclick = () => {


        document.getElementById('expenseamount').value = expenseamount.innerHTML.value;
        document.getElementById('discription').value = discription.innerHTML.value;
        document.getElementById('category').value=category.innerHTML.value;
  

        // localStorage.removeItem(obj.discription)
        // localStorage.removeItem(obj.expenseamount)
        // localStorage.removeItem(obj.category)
        // parentElem.removeChild(childElem);
        parentElem.removeChild(childElem);


    }


childElem.appendChild(deleteButton);
parentElem.appendChild(childElem);
childElem.appendChild(deleteButton2);
parentElem.appendChild(childElem);


}
