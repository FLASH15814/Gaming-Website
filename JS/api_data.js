


// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '7806afbf6dmsh188f3d7d27fdbeep164c6bjsn7ecc3ec66c81',
//     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//   }
// };

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     displayGameData(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function displayGameData(data) {
//   const gameDataContainer = document.getElementById('gameData');
//   gameDataContainer.innerHTML = '';
//   for (const game of data) {
//     const gameElement = document.createElement('div');
//     gameElement.className = 'game-card';
//     gameElement.innerHTML = `
//       <h3>${game.title}</h3>
// 	  <img src="${game.thumbnail}" alt="${game.title} Thumbnail">
//       <p>Genre: ${game.genre}</p>
//       <p>Platform: ${game.platform}</p>
//       <p>Description: ${game.short_description}</p>
//       <button onclick="openGameUrl('${game.game_url}')">GET NOW</button>
//     `;

//     gameDataContainer.appendChild(gameElement);
//   }
// }
// function openGameUrl(url) {
//   window.open(url, '_blank');
// }
// fetchData();

















const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7806afbf6dmsh188f3d7d27fdbeep164c6bjsn7ecc3ec66c81',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

let allGames = []; // Variable to store all games data

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    allGames = result; // Save all games data
    displayGameData(allGames);
  } catch (error) {
    console.error(error);
  }
}

function filterByCategory(category) {
  const filteredGames = allGames.filter(game => game.genre.toLowerCase() === category.toLowerCase());
  displayGameData(filteredGames);
}

function displayGameData(data) {
  const gameDataContainer = document.getElementById('gameData');
  gameDataContainer.innerHTML = '';
  for (const game of data) {
    const gameElement = document.createElement('div');
    gameElement.className = 'game-card';
    gameElement.innerHTML = `
      <h3>${game.title}</h3>
      <img src="${game.thumbnail}" alt="${game.title} Thumbnail">
      <p>Genre: ${game.genre}</p>
      <p>Platform: ${game.platform}</p>
      <p>Description: ${game.short_description}</p>
      <button onclick="openGameUrl('${game.game_url}')">GET NOW</button>
    `;

    gameDataContainer.appendChild(gameElement);
  }
}

function openGameUrl(url) {
  window.open(url, '_blank');
}

// Fetch data and display initially
fetchData();




