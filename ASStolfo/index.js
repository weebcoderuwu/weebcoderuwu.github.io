//api call

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://osutracker.com/api/users/14534655');
xhr.send();
// fun fact: i forgot to put the script tag in the html file 
// and i spent a lot of time trying to figure out why it wouldn't work
xhr.onload = function() {


    //convert to JSON
    let data = JSON.parse(xhr.response);

    //display on html
    document.getElementById("preformance-points").innerHTML = data.pp;
    document.getElementById("rank").innerHTML = data.rank;
    document.getElementById("lvl").innerHTML = data.level;
    document.getElementById("acc").innerHTML = data.acc;
    document.getElementById("plays").innerHTML = data.plays;

    //this is onlly the fuckin top play

    document.getElementById("topName").innerHTML = data.currentTop.name;
    document.getElementById("topId").innerHTML = data.currentTop.id;
    document.getElementById("topMods").innerHTML = data.currentTop.mods;
    document.getElementById("topPp").innerHTML = data.currentTop.pp;
    document.getElementById("topMisses").innerHTML = data.currentTop.missCount;
    


};

