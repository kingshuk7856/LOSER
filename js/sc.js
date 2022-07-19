setInterval(() => {
    dt = new Date()
    dom1 = document.querySelector("#time");
    dom2 = document.querySelector("#date");
    
    dom1.innerHTML = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    dom2.innerHTML = dt.toLocaleDateString();
}, 1000);