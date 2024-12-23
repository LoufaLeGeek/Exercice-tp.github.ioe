let from_1 = document.getElementById("exercice_3_1");

from_1.addEventListener("submit", (event) =>
{
    event.preventDefault();

    let reponse = document.getElementById("reponse_1");
    reponse.textContent = "Reponse :";

    for(let nbre = 1; nbre<=100; nbre++)
    {
        let nbre_diviseur = 0;
        for(let j = 1; j<=Math.sqrt(nbre); j++)
        {
            if(nbre%j == 0)
            {
                nbre_diviseur++;
            }
        }

        if(nbre_diviseur <= 2)
        {   
            reponse.textContent += ` ${nbre}`;
        }
    }
})



let form_2 = document.getElementById("exercice_3_2");

form_2.addEventListener("submit", (event) => {
    event.preventDefault();

    let nbre = document.getElementById("nbre");
    let reponse = document.getElementById("reponse_2");
    reponse.textContent = "Reponse :";
    
    for(let i = 1; i<= nbre.value; i++)
    {
        if(nbre.value%i == 0)
        {
            reponse.textContent += ` ${i}`;
        }
    }

    nbre.value = "";
})



let form_3 = document.getElementById("exercice_3_3");
let somme = 0, count = 0;


form_3.addEventListener("submit", (event)=>{
    event.preventDefault();

    let nbre = parseInt(document.getElementById("element").value);
    let reponse = document.getElementById("reponse_3");
    reponse.textContent = "Reponse :";

    if(nbre < 0)
    {
        reponse.textContent = `la moyenne est ${somme/count}`;
        somme = 0, count = 0;
        return;
    }

    
    somme += nbre;
    count++;
    reponse.textContent = `nombre: ${nbre} , somme: ${somme} et nombre de note : ${count}`;


    document.getElementById("element").value = "";
})


let form_4 = document.getElementById("exercice_3_4");


form_4.addEventListener("submit", (event)=>{
    event.preventDefault();

    let taille = parseInt(document.getElementById("taille").value);
    let reponse = document.getElementById("reponse_4");
    
    reponse.textContent = "";

    for(let i = 1; i<=taille; i++)
    {
        let caratere = '*'.repeat(2*i-1);
        reponse.textContent +='\n' + caratere;
    }

    document.getElementById("taille").value = "";
})