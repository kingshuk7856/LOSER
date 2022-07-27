ntxt = document.getElementById('ntxt'); //noteText at top
nttl = document.getElementById('nttl'); //noteText at top
add = document.getElementById('add'); //add btn
dlt = document.getElementById('dlt'); //delete btn
inputArea = document.getElementById('inputArea');

//resizing the note text
ntxt.addEventListener('click', () => {
    ntxt.style.height = "100px";
})


onload = load();



//loading all the contents in the localStorage
function load() {
    str = ""

    if (localStorage.storedTxt == null) {
        str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-bg-primary">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">1</h5>
                        <p id="ctxt" class="card-text">Welcome to atomic</p>
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
            if (element[1] == "" && element[0] == "") {
                str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-primary" style="width: 250px;">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">Empty Title</h5>
                        <p contentEditable="false" id="ctxt" class="card-text">Empty Desc</p>
                        <a onclick="del(${index})" class="btn">Delete</a>
                    </div>
                </div>
            </div>
            `
            }
            else if (element[1] == "") {
                str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-primary" style="width: 250px;">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">${element[0]}</h5>
                        <p contentEditable="false" id="ctxt" class="card-text">Empty Desc</p>
                        <a onclick="del(${index})" class="btn">Delete</a>
                    </div>
                </div>
            </div>
            `
            }
            else if (element[0] == "") {
                str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-primary" style="width: 250px;">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">Empty Title</h5>
                        <p contentEditable="false" id="ctxt" class="card-text">${element[1]}</p>
                        <a onclick="del(${index})" class="btn">Delete</a>
                    </div>
                </div>
            </div>
            `
            } 
            else {
                str += `
            <div class="mb-5 col-lg-3 col-md-4 col-sm-6">
                <div class="card text-primary" style="width: 250px;">
                    <img src="img/atomic.png" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 id="cttl" class="card-title">${element[0]}</h5>
                        <p contentEditable="false" id="ctxt" class="card-text">${element[1]}</p>
                        <a onclick="del(${index})" class="btn">Delete</a>
                    </div>
                </div>
            </div>
            `
            }
        });
    }
    document.getElementById('main').innerHTML = str;
}



//adding contents to the local storage
add.addEventListener('click', () => {
    let noteTxt = ntxt.value;
    let noteTitle = nttl.value;

    if (localStorage.storedTxt == null) {
        storedTxtArr = []
        storedTxtArr.push([noteTitle, noteTxt]);
        localStorage.setItem('storedTxt', JSON.stringify(storedTxtArr))
    }
    else {
        storedTxtArr = JSON.parse(localStorage.storedTxt);
        storedTxtArr.push([noteTitle, noteTxt]);
        localStorage.setItem('storedTxt', JSON.stringify(storedTxtArr))

        ntxt.style.height = "40px";
        ntxt.value = "";
        nttl.value = "";
    }
    load();
})


// ctxt.addEventListener('blur',()=>{
//     changedtxt=p.innerHTML;
// })


//deleting the contents in local storage
function del(index) {
    storedTxtArr = JSON.parse(localStorage.storedTxt);
    storedTxtArr.splice(index, 1);
    localStorage.setItem('storedTxt', JSON.stringify(storedTxtArr));
    load();
}



