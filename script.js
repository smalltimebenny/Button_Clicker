function change (element) {
    if (element.innerText == "Login"){
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login"
    }
}

function disappear (element) {
    element.remove()
}

function likeMessage (){
    alert ('Ninja was liked')
}