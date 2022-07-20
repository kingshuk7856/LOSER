setInterval(() => {
    dt = new Date()
    dom1 = document.querySelector("#time");
    dom2 = document.querySelector("#date");
    var options = { weekday: "long", 
                    year: "numeric", 
                    month: "short", 
                    day: "numeric" };
    
    dom1.innerHTML = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    dom2.innerHTML = dt.toLocaleDateString("en-IN",options);
}, 1000);