chrome.commands.onCommand.addListener(function(command) {
    chrome.windows.getLastFocused({}, (data) => {
        chrome.windows.update(data.id, {
            focused: true,
        });
    });
});