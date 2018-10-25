fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((res) => {
        createCard(res);
    })
    .catch(err => console.log(err));

function createCard(result){
    console.log(result.length);

    for(var i = 0; i < result.length; i++) {

        var divCont = document.createElement('div');
        divCont.className = 'card-container';
        var div = document.createElement('div');
        div.className = 'todo-card';
        div.innerHTML += "<div class='userID cardInfo'>User ID: " + result[i].userId + "</div>";
        div.innerHTML += "<div class='cardID cardInfo'>Card ID:   " + result[i].id + "</div>";
        div.innerHTML += "<div class='cardTitle cardInfo'>Title: " + result[i].title + "</div>";
        div.innerHTML += "<div class='cardStatus cardInfo'>Completed:   " + result[i].completed + "</div>";
        divCont.appendChild(div);
        document.getElementsByTagName('body')[0].appendChild(divCont);


    }
}

