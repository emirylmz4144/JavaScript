let formSucessDOM=document.querySelector("#userForm");
formSucessDOM.addEventListener("submit",formSubmit);

let userList=document.querySelector("#userList");
// <li class="list-group-item list-group-item-action list-group-item-success">dfadf</li>
function formSubmit(event)
{
    event.preventDefault();
   
    const E_MAİL=document.querySelector("#email").value;
    const PASSWORD=document.querySelector("#password").value;

    addToList(E_MAİL,PASSWORD)  
}

function addToList(email,password)
{
    let liDOM = document.createElement("li");
    liDOM.setAttribute("class", "list-group-item list-group-item-action list-group-item-success");
    liDOM.setAttribute("style", "display: flex;");//position absolute gibi yapıları kullanabilmek için en üstteki ebeveyn kutuya flex özelliği yapmalıyız
    
    let emailSpan = document.createElement("span");
    emailSpan.setAttribute("style", "flex-grow: 1;");//Birinin en sol birinin en sağa yaslanması için css flexbox özelliği bu sayade kullanılmıştır
    emailSpan.innerHTML = document.querySelector("#email").value;
    
    let passwordSpan = document.createElement("span");
    passwordSpan.setAttribute("style", "margin-left: auto;");
    passwordSpan.innerHTML = document.querySelector("#password").value;
    
    liDOM.appendChild(emailSpan);
    liDOM.appendChild(passwordSpan);
    userList.appendChild(liDOM);
}


