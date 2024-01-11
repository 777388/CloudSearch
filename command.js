chrome.contextMenus.create({
    id:"cloudsearch",
    title:"cloudsearch",
    contexts: ["page"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        const domain = new URL(tab.url).hostname;
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:s3.amazonaws.com %26 ${domain}` });
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:blob.core.windows.net %26 ${domain}` });
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:digitaloceanspaces.com %26 ${domain}` });
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:drive.google.com %26 ${domain}` });
        chrome.tabs.create({ url: `https://www.google.com/search?q=inurl:usgovcloudapi %26 ${domain}` });
        //`${info.menuItemId} ${variableName}`
        //const variableName = info.selectionText;
        //chrome.tabs.create({ url: `$variableName}` });
    }
});