fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((res) => {
        createCard(res);
    })
    .catch(err => console.log(err));

function createCard(result){
    for(var i = 0; i < result.length; i++) {
        var divCont = document.createElement('div');
        divCont.className = 'card-container';
        var div = document.createElement('div');
        div.className = 'todo-card';

        div.innerHTML += "<div class='userID cardInfo'>User ID: " + result[i].userId + "</div>";
        div.innerHTML += "<div class='cardTitle cardInfo'>Task: " + result[i].title + "</div>";
        div.innerHTML += "<div class='cardID cardInfo'>Card ID:   " + result[i].id + "</div>";

        if (result[i].completed === true) {
            divCont.style.backgroundColor = '#AAFFC2';
            div.innerHTML += "<div class='cardStatus cardInfo'>Completed: &#10004;</div>";
        } else {
            divCont.style.backgroundColor = '#B25B5B';
            div.innerHTML += "<div class='cardStatus cardInfo'>Completed: &#10006;</div>";
        }

        divCont.appendChild(div);
        document.getElementsByTagName('body')[0].appendChild(divCont);
    }
}

