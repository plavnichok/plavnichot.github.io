

function printSurname(){
    const name = document.getElementById('name').value;
    

    document.getElementById('surname').textContent = name + " Екатерина Антоновна";
}



function clickRandom() {

    if (document.body.style.backgroundColor === 'pink')
    {
        document.body.style.backgroundColor = 'white' ;
    }
    else{
    document.body.style.backgroundColor = 'pink' ;
    }
}
