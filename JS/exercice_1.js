let form_1 = document.getElementById('exercice_1_1');


form_1.addEventListener("submit", (event)=>{

    event.preventDefault();

    let age = document.getElementById('age');
    let response = document.getElementById('reponse_1');
    
    if(age.value >= 18)
    {
        response.textContent = `${age.value} an(s), vous etes majeure`;
    }else if(age.value < 18 && age.value > 0)
    {
        response.textContent = `${age.value} an(s), vous etes mineure`;
    }
    else{
        response.textContent = "cette age n'existe pas";
    };

    age.value = '';

})


let form_2 = document.getElementById('exercice_1_2');

form_2.addEventListener('submit', (event)=>{
    event.preventDefault();

    let nbre = document.getElementById('nbre');
    let response = document.getElementById('reponse_2');
    
    if(nbre.value%2 == 0)
    {
        response.textContent = `${nbre.value} est pair`;
    }else{
        response.textContent = `${nbre.value} est impair`;
    };

    nbre.value = "";
})


let form_3 = document.getElementById('exercice_1_3');

form_3.addEventListener('submit', event=>{
    event.preventDefault();

    const mois_table = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ];


    let mois = document.getElementById('mois_nbre');
    let response = document.getElementById('reponse_3');
    if(mois.value > mois_table.length || mois.value <= 0)
    {
        response.textContent = "Ce mois n'existe pas";
    }else{

        let message = `${mois.value} correspond au mois de ${mois_table[mois.value-1]}`;
        response.textContent = message;
    }

    mois.value = "";
})