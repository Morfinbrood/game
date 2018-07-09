function addNewRecord() {
	const newScore = document.getElementById('score').value;
	const name = document.getElementById('name').value;
	const userData = {
		nickname: name
	};
	Scoreboard.chkAndUpdateTop10LocalStorageRecords('top10score', newScore, userData);
}

function showScoreboard() {
	Scoreboard.createTableOfRecordsFromLocalStore('top10score');
}