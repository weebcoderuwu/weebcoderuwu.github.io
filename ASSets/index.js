let xhr = new XMLHttpRequest();
xhr.open('get', 'https://osutracker.com/api/users/14534655');
xhr.send();

xhr.onload = function() {
    console.log(xhr.response);

    asd =(xhr.response)
};

