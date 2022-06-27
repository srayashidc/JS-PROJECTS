//local review data
const reviews = [
    {
        id: 1,
        job: "xyz",
        Img: "pi.jpg",
        text: "aaaaaaaaaaaaaaaa bbbbbbbbbbbbbbb cccccccccccccc ddddddddddddddddddd",
    },
    {
        id: 2,
        job: "stu",
        Img: "pi.jpg",
        text: "aaaaaaaaaaaaaaaa bbbbbbbbbbbbbbb cccccccccccccc ddddddddddddddddddd",
    },
    {
    id: 3,
    job: "pqr",
    Img: "pi.jpg",
    text: "aaaaaaaaaaaaaaaa bbbbbbbbbbbbbbb cccccccccccccc ddddddddddddddddddd",
    },
    {
    id: 4,
    job: "abc",
    Img: "pi.jpg",
    text: "aaaaaaaaaaaaaaaa bbbbbbbbbbbbbbb cccccccccccccc ddddddddddddddddddd",
    }
];

//select items
const img = document.getElementById("pi-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function()
{
    showPerson(currentItem);
});

//show person based on item
function showPerson(person)
{
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//show next person
nextBtn.addEventListener("click", function()
{
    currentItem++;
    if(currentItem>reviews.length-1)
    {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener("click", function()
{
    currentItem--;
    if(currentItem<0)
    {
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});

//show random person
//show previous person
randomBtn.addEventListener("click", function()
{
    currentItem = Math.floor(Math.random()*reviews.length);
    {
        console.logshowPerson(); void
        showPerson();
    };
});   