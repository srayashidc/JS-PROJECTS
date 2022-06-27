const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#F15025


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() 
{
    let hexcolor = "#";
    for(let i=0;i<6;i++)
    {
        hexcolor += hex[getRandomNumber()];
    }
    console.log(getRandomNumber);

    color.textContent = hexcolor;
    document.body.style.hackgroundColor = hexcolor;
});

function getRandomNumber()
{
    return Math.floor(Math.random() * hex.length);
}