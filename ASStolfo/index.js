const API_URL = "https://osutracker.com/api/";

const xhr = new XMLHttpRequest();

function OnRequestHandeler() {
   if (this.redystate == 4 && this.status == 200)  {
   
     console.log(this.response);
   }
}


xhr.addEventListener("load",OnRequestHandeler);
xhr.open("GET" , `${API_URL}/users/{14534655}`);
// mi user id es 14534655
xhr.send();