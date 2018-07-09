async function showMenu() {
	const infoOutputScheme = { info: 'this is addition text' };
	const menuObj = {
		'start new game': { nameButton: 'startNewGame', info: 'Press button to start game' },
		'music on/off': { nameButton: 'musicOn_Off', info: 'Press for on or off music' },
		'volume +': { nameButton: 'increaseVol', info: 'Press for increase volume' },
		'volume -': { nameButton: 'decreaseVol', info: 'Press for decrease volume' },
		'scoreboard': { nameButton: 'scoreboard', info: 'Press for display scoreboard' }
	};
	const backgroundImageWheel = 'img/background.png';
	const resultSelect = await new SelectionWheel(menuObj, document.getElementById('example-container'), infoOutputScheme, document.body, backgroundImageWheel, 'gameMenuSW');
	if (resultSelect) {
		switch (resultSelect.nameButton) {
		case 'startNewGame':
			console.log('startNewGame');
			break;
		case 'musicOn_Off':
			console.log('musicOn_Off');
			break;
		case 'increaseVol':
			console.log('increaseVol');
			break;
		case 'decreaseVol':
			console.log('decreaseVol');
			break;
		case 'scoreboard':
			console.log('scoreboard');
			break;
		default:
			console.log('default');
		}
	}
	else {
		console.log('back button');
	}

}
