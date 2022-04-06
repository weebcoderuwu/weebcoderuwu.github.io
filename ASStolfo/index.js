//api call

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://osutracker.com/api/users/14534655');
xhr.send();
// fun fact: i forgot to put the script tag in the html file 
// and i spent a lot of time trying to figure out why it wouldn't work
xhr.onload = function() {

    setInterval( xhr.send(),3000);
    //convert to JSON
    let data = JSON.parse(xhr.response);

    //display on html
    document.getElementById("preformance-points").innerHTML = data.pp;
    document.getElementById("rank").innerHTML = data.rank;
    document.getElementById("lvl").innerHTML = data.level;
    document.getElementById("acc").innerHTML = data.acc;
    document.getElementById("plays").innerHTML = data.plays;

    
  


};

