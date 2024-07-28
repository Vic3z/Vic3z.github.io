function addGameResult(guessesRemaining) {
    const attempts = 6 - guessesRemaining;
    
    let results = localStorage.getItem('gameResults');
    results = results ? JSON.parse(results) : [];
    results.push(attempts);
    localStorage.setItem('gameResults', JSON.stringify(results));
}
