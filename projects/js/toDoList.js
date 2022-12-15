save = document.getElementById("save");
table = document.getElementById("table");

onload = load();

function load() {
    // t = document.getElementById('ttl').value;
    // d = document.getElementById('desc').value;

    str = ""
    if (localStorage.getItem('item') == null) {
        itemStrParse = []
        itemStrParse.push(["Hello", "Welcome to our to do list where you can lists the tasks of your day."]);
        localStorage.setItem('item', JSON.stringify(itemStrParse));

        str += `
            <thead>
                <tr>
                    <th scope="col">SNo.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody id="tb">
            <tr>
                        <th scope="row">1</th>
                        <td>Hello</td>
                        <td>Welcome to our to do list where you can lists the tasks of your day.</td>
                        <td><button onclick="del(0)" class="btn btn-sm")">Remove</button></td>
            </tr>
            </tbody>`
    }
    else if (localStorage.getItem('item') == '[]') {
        str += `
            <div>
            <p><i>Nothing to show, add some notes here</i></p>  
            </div>
            `
    }
    else {
        itemStr = localStorage.getItem('item');
        itemStrParse = JSON.parse(itemStr);

        itemStrParse.forEach((element, index) => {
            str += `
                < table class="table" >
                <thead>
                <tr>
                    <th scope="col">SNo.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>

                <tbody id="tb">
                <tr>
                        <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button onclick="del(${index})" class="btn btn-sm")">Remove</button></td>
                </tr>
                </tbody >
                </table >`;
        });
    }
    main.innerHTML = str;
}

save.addEventListener('click', () => {
    t = document.getElementById('ttl').value;
    d = document.getElementById('desc').value;

    if (localStorage.getItem('item') == null) {
        itemStrParse = []
        itemStrParse.push([t, d]);
        localStorage.setItem('item', JSON.stringify(itemStrParse));
    }
    else {
        itemStr = localStorage.getItem('item');
        itemStrParse = JSON.parse(itemStr);
        itemStrParse.push([t, d]);
        localStorage.setItem('item', JSON.stringify(itemStrParse));
    }
    load();
})

del = (itemIndex) => {
    itemStr = localStorage.getItem('item');
    itemStrParse = JSON.parse(itemStr);
    itemStrParse.splice(itemIndex, 1);
    localStorage.setItem('item', JSON.stringify(itemStrParse));

    load();
}