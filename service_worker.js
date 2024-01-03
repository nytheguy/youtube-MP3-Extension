chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs[0].url)
})


chrome.tabs.onActivated.addListener(tab => {

    current_tab = chrome.tabs.get(tab.tabId, selectedTab => {
        console.log(selectedTab.url)
    })
})


chrome.tabs.onUpdated.addListener( function(id, info, tab) { 
    console.log(tab.url);
})

async function sendMsg(){
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
    // do something with response here, not outside the function
    console.log(response);  
}

sendMsg();
