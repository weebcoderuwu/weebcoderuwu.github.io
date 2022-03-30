let xhr = new XMLHttpRequest();
xhr.open('get', 'https://osutracker.com/api/users/14534655');
xhr.send();

xhr.onload = function() {

    console.log(xhr.response);

    


    let data = JSON.parse(xhr.response);
    let name = data.name;
    let recent_scores = data.recent_scores;
    let recent_plays = data.recent_plays;
    let recent_events = data.recent_events;
    let recent_achievements = data.recent_achievements;
    let recent_beatmaps = data.recent_beatmaps;
    let recent_plays_count = data.recent_plays_count;
    let recent_scores_count = data.recent_scores_count;
    let recent_achievements_count = data.recent_achievements_count;
    let recent_beatmaps_count = data.recent_beatmaps_count;
    let pp = data.pp;

    

    document.getElementById("preformance-points").innerHTML = data.pp;

};

