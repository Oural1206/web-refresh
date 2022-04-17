let startButton = document.getElementsByClassName("start")[0]
let stopButton = document.getElementsByClassName("stop")[0]
let focusButton = document.getElementsByClassName("focus")[0]
let allwaysButton = document.getElementsByClassName("allways")[0] 

function setButtons() {
    chrome.storage.local.get(["active"], function(result) {
        if (result.active) {
            startButton.style.display = "none"
            stopButton.style.display = "block"
        } else {
            stopButton.style.display = "none"
            startButton.style.display = "block"
        }
    });
    chrome.storage.local.get(["focus"], function(result) {
        if (result.focus) {
            allwaysButton.style.display = "none"
            focusButton.style.display = "block"
        } else {
            focusButton.style.display = "none"
            allwaysButton.style.display = "block"
        }
    });
}

startButton.addEventListener("click", function() {
    chrome.storage.local.set({active: true})
    setButtons()
})
stopButton.addEventListener("click", function() {
    chrome.storage.local.set({active: false})
    setButtons()
})

allwaysButton.addEventListener("click", function() {
    chrome.storage.local.set({active: false})
    chrome.storage.local.set({focus: true})
    setButtons()
})
focusButton.addEventListener("click", function() {
    chrome.storage.local.set({active: false})
    chrome.storage.local.set({focus: false})
    setButtons()
})

setButtons()