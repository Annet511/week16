document.getElementById ("result-btn").addEventListener ("click", () => {
    let namePrice = document.querySelector ("#carname").value;
    let modelPrice = document.querySelector ("#carmodel").value;
    let enginePrice = document.querySelector ("#engine").value;
    let delivery = document.querySelector ('#delivery').checked ? 150 : 0;
    let using = document.querySelector ('[name="using"]:checked').value;
    
    let resultHTML = document.querySelector ("#result");
let result = Number(namePrice) + Number(modelPrice) + Number(enginePrice) + delivery + Number(using);
resultHTML.innerHTML = "Сумма " + result + " рублей"
});