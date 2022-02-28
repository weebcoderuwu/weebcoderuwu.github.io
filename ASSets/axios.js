const OsuStats = async() => {
    const statsdata = await axios.get("https://osutracker.com/api/users/14534655/stats")
      
    console.log(statsdata.data.results[0]);
  
  }
  
  OsuStats();
  
  