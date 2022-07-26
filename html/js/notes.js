ntxt = document.getElementById('ntxt'); //noteText at top
add = document.getElementById('add'); //add btn
dlt = document.getElementById('dlt'); //delete btn
storedTxt = [] //array that stored the value

//resizing the note text
ntxt.addEventListener('click', () => {
    ntxt.style.height = "100px";
})

onload = load();



//loading all the contents in the localStorage
function load() {
    console.log(localStorage.storedTxt)
    str = ""

    if (localStorage.storedTxt == null) {
        str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-bg-primary">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">1</h5>
                        <p id="ctxt" class="card-text">Welcome to Notes</p>
                    </div>
                </div>
            </div>
            `
    }
    else {

        cttl = document.getElementById('cttl');
        ctxt = document.getElementById('ctxt');

        let storedTxtArr = JSON.parse(localStorage.storedTxt)
        storedTxtArr.forEach((element, index) => {
            str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-bg-primary">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">${index + 1}</h5>
                        <p contentEditable="true" id="ctxt" class="card-text">${element}</p>
                        <a onclick="del(${index})" class="btn">Delete</a>
                    </div>
                </div>
            </div>
            `
        });
    }
    document.getElementById('main').innerHTML = str;
}



//adding contents to the local storage
add.addEventListener('click', () => {
    let noteTxt = ntxt.value;

    storedTxt.push(noteTxt);
    localStorage.setItem('storedTxt', JSON.stringify(storedTxt))

    ntxt.style.height = "40px";
    ntxt.value = "";
    load();
})



//deleting the contents in local storage
function del(index) {
    storedTxtArr = JSON.parse(localStorage.storedTxt);
    storedTxtArr.splice(index, 1);
    localStorage.setItem('storedTxt', JSON.stringify(storedTxtArr));
    location.reload();
}



