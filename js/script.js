const localStorageKey = "list";

function validaItem() {
    let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let input = document.getElementById("idInputTarefa").value;
    let existe = value.find((x) => {
        if ( x.name == input) {
            return true;
        }
        else{
           return false;
        }
    })
    console.log(existe);
    return existe;
}

function newTask() {
    let input = document.getElementById("idInputTarefa");
    input.style.border = "";

    if (!input.value) {
        input.style.border = "2px solid red"
        alert("Texto inserido não é valido")
    }
    else if(validaItem()) {
        alert("Tarefa ja existe");

        
    }
    else {

        let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        value.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(value));
        showValue();
        input.value = '';
    }

}



function showValue() {

    let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < value.length; i++) {
        list.innerHTML += `<li>${value[i]['name']}<button id="btn-ok" onclick="removeItem('${value[i]["name"]}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`
    }

}

function removeItem(data) {

    let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = value.findIndex(x => x.name == data);
    value.splice(index, 1);

    localStorage.setItem(localStorageKey, JSON.stringify(value))
    showValue();
}



showValue();