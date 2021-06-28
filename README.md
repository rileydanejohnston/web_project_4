# Around The U.S.

## URL
[Around The U.S.](https://rileydanejohnston.github.io/web_project_4/)

## Description
_"Around The U.S." is a single page website that has an editible profile section and a cards section. The cards section starts with 6 intial cards. The user has the ability to add and delete cards as they see fit_

## Techniques
_The first function of "Around The U.S" is the ability to update the profile section. This is done by clicking the edit button to the right of the words "Jacques Cousteau" then entering new values in the name & about fields._

_The user also can manipulate how many places appear on their page. Click the button with the "+" symbol to add a new card. A popup form will prompt the user for the name of a place and the address of a photo. The new card will appear at the beginning of the list when the user submits the form. In addition to adding cards, the user can also delete cards by clicking the trash can icon in the top right corner of each card._

_Each place card can be 'liked' and each photo can be enlarged. Click the heart symbol in the lower right corner of each place card to like the place. Click the place card's photo to increase it's size._

## Technologies
_CSS is used to make the site responsive when it's viewed on different screen sizes._

_JavaScript is used to handle some basic input procedures and HTML manipulations. When the user clicks the edit button, a form will appear allowing the user to update their profile information. The form will disappear when the user clicks the save/close buttons._

_The add place button is very similar to the edit button. A form will appear, the user enters the place name & image source, then the place cards are created dynamically by cloning a template when the user clicks the save button._

_The close button removes the card from the page. This is done by with the remove function and an event listener. When the close button for that specific card is clicked, the card is removed from the list of cards._

_The like button's appearance changes from white to black after being clicked. An event listener is attached the the like button when the card is created. The target method distinguishes which button to change the appearance of when it's clicked._

_Each photo increases size and moves to the center of the screen after being clicked. The image and caption are in a popup container similar to the add card/edit profile form popups. JavaScript determines which card is clicked then populates the popup with the card's image and city name._

## Future Features
1. Create an account so users can save their profiles & cards