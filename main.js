
let number = document.getElementsByTagName("input")[0];
let text = document.getElementsByTagName("input")[1];
let select = document.getElementsByTagName("select")[0];
let button = document.getElementsByTagName("input")[2];
let result = document.getElementsByClassName("results")[0];

document.forms[0].onsubmit = function (event) {
    event.preventDefault();

    let div = document.createElement("div");
    let section = document.createElement("section");

    let divText = document.createTextNode(text.value);
    let sectionText = document.createTextNode(text.value);

    div.setAttribute("class" , "box");
    div.setAttribute("title" , "Element");
    section.setAttribute("class" , "box");
    section.setAttribute("title" , "Element");

    div.appendChild(divText);
    section.appendChild(sectionText);

    if(number.value != "" & text.value != "") {
        if(select.value == "Div") {
            for(let i = 0 ; i < number.value ; i++) {
                div.setAttribute("id" , `id-${i}`);
                result.appendChild(div.cloneNode(true));
            }
        } else {
            for(let i = 0 ; i < number.value ; i++) {
                section.setAttribute("id" , `id-${i}`);
                result.appendChild(section.cloneNode(true));
            }
        }
    }
}

// Solution : remove old elements when submit new elements
button.onmousedown = function () {
    result.innerHTML = "";
}

