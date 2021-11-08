const Wish=document.getElementById ('demo');
const btn=document.getElementById ('btn');
btn.addEventListener ('click' , getWish);
getWish();

function getWish () {
    fetch ("./wishes.json")
    .then (function (response) {
        return response.json();

    })
    .then (function(data) {
        console.log(data);
        let index=Math.floor (Math.random()*data.length);
        console.log(index);
        var wish=data[index].wish;
       
        Wish.textContent=wish;
    })
}