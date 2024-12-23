let form_1 = document.getElementById("exercice_2_1");



form_1.addEventListener('submit', (event)=>{
    event.preventDefault();

    let reponse = document.getElementById('reponse_1');
    reponse.textContent = "Reponse :";

    for(let i = 1; i<=10; i++)
    {
        reponse.textContent += ` ${i}`;
    }

})



let form_2 = document.getElementById('exercice_2_2');

form_2.addEventListener('submit', (event)=>{
    event.preventDefault();

    let reponse = document.getElementById('reponse_2');
    reponse.textContent = "Reponse :";
    let s = 0, i = 0;
    
    while(i <= 100)
    {
            s += i;
            i++;
    }
    reponse.textContent += ` ${s}`;
})



// sans le do-while
let random_nbre = Math.floor(Math.random()*100) + 1;

let form_3 = document.getElementById("exercice_2_3");
let nbre;

form_3.addEventListener("submit", (event) =>{
    event.preventDefault();

    nbre = parseInt(document.getElementById('saisie').value, 10);
    let reponse = document.getElementById("reponse_3");
    if(isNaN(nbre) || nbre> 100 || nbre < 1){
        reponse.textContent = "le nombre est entre 1 et 100";
        return;
    }

    if(nbre > random_nbre){
        reponse.textContent = "Plus petit";
    }else if(nbre < random_nbre){
        reponse.textContent = "Plus grand";
    }else{
        reponse.textContent = `Bonne reponse, le nombre est ${random_nbre}`;
        document.getElementById('saisie').value = '';
        random_nbre = Math.floor(Math.random()*100) + 1;
    }

    document.getElementById('saisie').value = '';
    
})

// avec le dowhile mais sans le input

let btn_clicked = document.getElementById("clik_btn");

btn_clicked.addEventListener("click", (event) =>{
    event.preventDefault();
    let reponse = document.getElementById("reponse_3");
    console.log(random_nbre);

    do{
        
        nbre = parseInt(prompt("entrer une nombre"), 10);

        if(isNaN(nbre) || nbre > 100 || nbre < 1)
        {
            alert("le nombre est entre 1 et 100");
        }if(nbre > random_nbre){
            alert("plus petit");
        }else if(nbre < random_nbre){
            alert("plus grand");
        }else{
            alert("bonne reponse");
            return;
        }
        
    } while (nbre !=random_nbre);
})


let form_4 = document.getElementById("exercice_2_4");
form_4.addEventListener("submit", (event) =>{
    event.preventDefault();
    let fa = 0, fb = 1;

    let reponse = document.getElementById("reponse_4");
    reponse.textContent = "";
    let nbre = document.getElementById("nbre");
    let tmp;

    for(let i = 1; i<=nbre.value; i++)
    {
        tmp = fa;
        fa = fb;
        fb = fb + tmp; 
        reponse.textContent += ` ${fa}`
    }
})






