document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("tabInfo")) {
        return;
    }

    var root = document.getElementById("info");
    root.innerHTML = "";
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        browser.tabs.get(tabs[0].id, function (tab) {
            var node = document.createElement("div");
            var textnode = document.createTextNode("Url: " + tab.url);
            node.appendChild(textnode);
            root.appendChild(node);
            var node2 = document.createElement("div");
            var textnode2 = document.createTextNode("Title: " + tab.title);
            node2.appendChild(textnode2);
            root.appendChild(node2);
        });
        root.style.display = "block";
    });
});