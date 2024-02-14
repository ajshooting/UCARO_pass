const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'button1Clicked' });
    });
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'button2Clicked' });
    });
});