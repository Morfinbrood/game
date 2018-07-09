async function showSelectionWheel() {
	const object = {
		fireball: { damage: 10, manacost: 10, icon_path: 'img/icons/fireball.jpg' },
		attack: { damage: 340, manacost: 564, icon_path: 'img/icons/attack.jpg' },
		slash: { damage: 34, manacost: 133, icon_path: 'img/icons/slash.jpg' },
		kick: { damage: 576, manacost: 1, icon_path: 'img/icons/kick.jpg' },
		iceBolt: { damage: 2, manacost: 0, icon_path: 'img/icons/iceBolt.jpg' },
	};

	const infoOutputScheme = { damage: 'Damage/heal', manacost: 'Difficulty' };
	const container = document.getElementById('example2-container');
	const parent = document.body;
	const selectedImpact = await new SelectionWheel(object, container, infoOutputScheme, parent, 'img/wheel.png', 'impactsSW');
	if (selectedImpact) {
		console.log(selectedImpact);
	}
	else {
		console.log('back button');
	}

}