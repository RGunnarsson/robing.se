function addApplication(name, iconClasses, label, callback) {
    const appDiv = document.createElement("div");
    appDiv.classList.add("shortcut");
    appDiv.classList.add(name);
    appDiv.innerHTML = `
        <i class="${iconClasses}"></i>
        <span class="label">${label}</span>
    `;

    appDiv.querySelector("i").addEventListener("click", callback);
    document.querySelector("#main").appendChild(appDiv);
}

function adminLogin() {
    alert("in progress");
}