// JS/script.js
fetch('/data')  // Assuming your server exposes a /data endpoint
    .then(response => response.json())
    .then(gameData => {
        const gameDetailsContainer = document.getElementById('gameDetails');
        const gameDetailsHTML = `
            <p><strong>Title:</strong> ${gameData.title}</p>
            <p><strong>Description:</strong> ${gameData.short_description}</p>
            <p><strong>Genre:</strong> ${gameData.genre}</p>
            <p><strong>Platform:</strong> ${gameData.platform}</p>
            <p><strong>Publisher:</strong> ${gameData.publisher}</p>
            <p><strong>Developer:</strong> ${gameData.developer}</p>
            <p><strong>Release Date:</strong> ${gameData.release_date}</p>
            <a href="${gameData.game_url}" target="_blank">Visit Game</a>
        `;
        gameDetailsContainer.innerHTML = gameDetailsHTML;
    })
    .catch(error => console.error('Error fetching game data:', error));
