//API URL
document.addEventListener('DOMContentLoaded',function(){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
	    method: 'GET',//Get Method -> to retreive the data
	    headers: {
		    'X-RapidAPI-Key': '7806afbf6dmsh188f3d7d27fdbeep164c6bjsn7ecc3ec66c81',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    };

    let result;
    const gameList = document.getElementById('game-list');
function displayGames(games){
    gameList.innerHTML = '';
    games.forEach(game =>{
        const div = document.createElement('div');
        //to get names/title of the games
        const li =document.createElement('li');
        li.textContent = game.title;
        div.appendChild(li);
        //to add images of the games
        const image = document.createElement('img');
        image.src=game.thumbnail;
        image.alt=game.title;
        gameList.appendChild(image);
        //to get the game url
        const a = document.createElement('a');
        a.href= game.game_url;
        a.textContent = game.title;
        //to display the game url in a new tab
        a.target="_blank";
        div.appendChild(a);  
        //to get description about the game
        const p = document.createElement('p');
        p.textContent = game.short_description;
        div.appendChild(p); 
        gameList.appendChild(div); 
    });
}

//Asynchronous Function

async function fetchData() {
    try {
        const response = await fetch(url, options);
        result = await response.json();
        //to display the all data in an API
        
        displayGames(result);
    } catch (error) {
        console.error(error);
    }
}

const searchInput = document.querySelector('.input-search');

searchInput.addEventListener('keyup',(e)=>{
    const searchString = e.target.value.toLowerCase();
    const filterGames =result.filter((game) =>{
        return (game.title.toLowerCase().includes(searchString)|| game.short_description.toLowerCase().includes(searchString));
    });
    displayGames(filterGames);
});
fetchData();
});
