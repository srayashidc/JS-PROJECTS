const questions = document.querySelectorAll(".question");

questions.array.forEach(function(question)
{
   // console.log(orange);
   const btn = question.querySelector(".questions-btn");
   //console.log(btn);
   btn.addEventListener("click", function()
   {
    question.forEach(function(item)
    {
        if(item !== question)
        {
            item.classList.remove("show-text");
        }
    })
    question.classList.toggle("show-text");
   });
});
