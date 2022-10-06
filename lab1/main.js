const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const liczba4 = document.querySelector('#liczba4');
const btnPrzelicz = document.querySelector('#przelicz');
const sumaPojemnik = document.querySelector('#suma');
const sredniaPojemnik = document.querySelector('#srednia');
const minPojemnik = document.querySelector('#min');
const maxPojemnik = document.querySelector('#max');



btnPrzelicz.addEventListener('click', () => {
    
    var l1 = parseInt(liczba1.value);
    var l2 = parseInt(liczba2.value);
    var l3 = parseInt(liczba3.value);
    var l4 = parseInt(liczba4.value);

    sumaPojemnik.innerHTML = l1 + l2 + l3 + l4;
    sredniaPojemnik.innerHTML = (l1 + l2 + l3 + l4)/4; 
    minPojemnik.innerHTML = Math.min(l1, l2, l3, l4);
    maxPojemnik.innerHTML = Math.max(l1, l2, l3, l4);

});