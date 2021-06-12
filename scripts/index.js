let likeBtn = document.querySelectorAll('.cards__like-button');

for (let i = 0; i < likeBtn.length; ++i)
{
  likeBtn[i].addEventListener("click", function() {
    likeBtn[i].classList.toggle('cards__like-button_active');
  });
}

/* I can select the first like button and make it active with querySelector. I couldn't figure out how to select all and get the index of the like button that was clicked. I got help from this post: https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist */