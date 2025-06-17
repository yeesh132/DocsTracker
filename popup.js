function formatTime(ms){
    const seconds = Math.floor(ms % 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}mins ${seconds}secs`;
}

chrome.storage.local.get(['wordCount', 'startTime'], (data) => {
    const wordCount = data.wordCount || 0;
    const startTime = data.startTime || Date.now();
    const elapsedTime = Date.now() - startTime;

    document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;
    if(data.startTime) {
        const elapsedTime = Date.now() - data.startTime;
        document.getElementById('timeSpent').textContent = `Elapsed Time: ${formatTime(elapsedTime)}`;
    }
});
