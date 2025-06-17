let wordCount = 0;
let startTime = Date.now();

setInterval(() => {
  const bodyText = document.body.innerText;
  const words = bodyText.trim().split(/\s+/);
  wordCount = words.length;

  chrome.storage.local.set({ wordCount, startTime });
}, 5000); // update every 5 seconds
