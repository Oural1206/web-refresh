function find(table, ellement) {
    const result = table.filter(word => word.match(ellement))
    if (result.length > 0) {
        return true
    } else {
        return false
    }
};

function startRefresh() {
    chrome.storage.local.get(["active"], function(result) {
        if (result.active) {
            chrome.tabs.reload()
            const loop = setTimeout(startRefresh, 1000)
        }
    });
}

chrome.storage.onChanged.addListener(function (changes) {
    const changedItems = Object.keys(changes);
    if (find(changedItems, "active")) {
        chrome.storage.local.get(["active"], function(result) {
            if (result.active) {
                startRefresh()
            }
        })
    }
})

chrome.storage.local.set({active: false})