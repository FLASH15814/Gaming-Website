async function fetchData() {
	const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7806afbf6dmsh188f3d7d27fdbeep164c6bjsn7ecc3ec66c81',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json(); // Assuming the response is JSON
		console.log(result);

		// Clear existing content
		const gameDetailsElement = document.getElementById('gameDetails');
		gameDetailsElement.innerHTML = '';

		// Create and append a table for game details
		const table = document.createElement('table');
		gameDetailsElement.appendChild(table);

		// Create table header
		const headerRow = document.createElement('tr');
		for (const key in result[0]) {
			if (key !== 'id') { // Exclude 'id' from headers
				const th = document.createElement('th');
				th.textContent = key.toUpperCase();
				headerRow.appendChild(th);
			}
		}
		table.appendChild(headerRow);

		// Create table rows with data
		result.forEach(game => {
			const row = document.createElement('tr');
			for (const key in game) {
				if (key !== 'id') { // Exclude 'id' from data
					const cell = document.createElement('td');
					const value = key === 'thumbnail' ? `<img src="${game[key]}" alt="Game Thumbnail">` : game[key];
					cell.innerHTML = value;
					row.appendChild(cell);
				}
			}
			table.appendChild(row);
		});
	} catch (error) {
		console.error(error);
	}
}

fetchData();