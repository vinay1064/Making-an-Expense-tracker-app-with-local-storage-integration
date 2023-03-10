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

    localStorage.setItem(obj.userid, JSON.stringify(obj));
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



function showUserOnScreen(user) {
    document.getElementById('expenseamount').value = '';
    document.getElementById('discription').value = '';
    document.getElementById('category').value = '';


 const parentNode = document.getElementById('listOfitem');
 const childHTML = `<li id='${user.userid}'>'${user.expenseamount}' - '${user.discription}'-'${user.category} <button onclick=editUserDetails('${user.userid}','${user.expenseamount}','${user.discription}','${user.category}')>Edit</button><button onclick=deleteUser('${user.userid}')>Delete</button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
//  console.log(parentNode)


}


function editUserDetails(userid,expenseamount,discription,category){
    document.getElementById('expenseamount').value = expenseamount;
    document.getElementById('discription').value = discription ;
    document.getElementById('category').value = category;
    deleteUser(userid)
}



function deleteUser(userid){
    localStorage.removeItem(userid);
    removeUserFromScreen(userid)
}


function removeUserFromScreen(expenseamount){
    const parentNode = document.getElementById("listOfitem");
    const childNodeToBeDeleted = document.getElementById(expenseamount);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
