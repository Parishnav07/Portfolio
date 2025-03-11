function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
setTimeout(() => {
    window.location.href = "newpage.html";
}, 5000);