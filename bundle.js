//GET запрос для получения данных с сервера 

$.get("./api", (data) => {
    data.forEach(file => {
        let elem = document.createElement("h1");
        elem.textContent = file;
        document.body.append(elem);
    });
}, "JSON"); // второ параметр что принимаем "JSON" что бы распарсить из string


////// POST запрос для отправки данных на сервер 
const btnCreate = document.getElementById("createButton");
const textPage = document.getElementById("createInput");
const delInput = document.getElementById("delInput");
const delButton = document.getElementById("delButton");

btnCreate.addEventListener("click", () => {
    $.post("./api/createNewHtmlPage.php", {
       "name": textPage.value 
    }, (data) => {
         
         let newElem = document.createElement("h1");
         newElem.textContent = data;
         document.body.append(newElem);
        }).fail(() => { alert("Такая Страница уже существует"); } )
});

delButton.addEventListener("click", () => {
    $.post("./api/deleteFile.php", {
        "nameFile": delInput.value
    }, (data) => {
        const mas = document.querySelectorAll("h1");

        mas.forEach(v => {
           if(v.textContent == delInput.value + ".html"){
            v.style.display = "none";
           }
        });
        delInput.value = "";
        delInput.placeholder = data;
    });
});
