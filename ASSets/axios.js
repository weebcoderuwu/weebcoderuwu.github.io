axios.get("https://osutracker.com/api/users/14534655/stats")
    .then((respuesta) => {
        console.log(respuesta.data.results)
    })