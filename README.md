# Around The U.S.

## URL
[Around The U.S.](https://rileydanejohnston.github.io/web_project_4/)

## Description
_"Around The U.S." is a single page website that has an editible profile section and a cards section. The cards section starts with 6 intial cards. The user has the ability to add, delete and like cards as they see fit._

## Techniques
_The first function of "Around The U.S" is the ability to update the profile section. This is done by clicking the edit button to the right of the words "Jacques Cousteau" then entering new values in the name and about fields._

_The user also can manipulate how many places appear on their page. Click the button with the "+" symbol to add a new card. A popup form will prompt the user for the name of a place and the address of a photo. The new card will appear at the beginning of the list when the user submits the form. In addition to adding cards, the user can also delete cards by clicking the trash can icon in the top right corner of each card._

_Each place card can be 'liked' and each photo can be enlarged. Click the heart symbol in the lower right corner of each place card to like the place. Click the place card's photo to increase it's size._

_The user has a few different options to close the profile form, the new card form, and the popup photograph. The first option is to click the close button ('X') in the top right corner. The user can also press the 'escape' key. Finally, the user can simply click outside the form or enlarged photo to close the popup._

_Each form on the page will change colors and display error messages when the user enters incorrect information._

## Technologies
_CSS is used to make the site responsive when it's viewed on different screen sizes._

_JavaScript is used to handle some basic input procedures and HTML manipulations. When the user clicks the edit button, a form will appear allowing the user to update their profile information. The form will disappear when the user clicks the save/close buttons._

_The add place button is very similar to the edit button. A form will appear, the user enters the place name and image source, then the place cards are created dynamically by creating a new instance of the Card class when the user clicks the save button. The place and name the user enters will be inserted onto the card before the card is added to the page._

_The close button removes the card from the page. This is done by with the remove function and an event listener. When the close button for that specific card is clicked, the card is removed from the list of cards._

_The like button's appearance changes from white to black after being clicked. An event listener is attached the the like button when the card is created. The target method distinguishes which button to change the appearance of when it's clicked._

_Each photo increases size and moves to the center of the screen after being clicked. The image and caption are in a popup container similar to the add card/edit profile form popups. JavaScript determines which card is clicked then populates the popup with the card's image and city name._

_The user can now close the popups by pressing the escape key. The document has an event listener that fires when a key is pressed. The popup will close if the key value is the escape key and if the popup is active._

_The user can also close the popups by clicking the overlay outside the form or photo. The document has an event listener that fires when a left click happens. The popup will close if the element that was clicked is the overlay._

_All forms on the page now have input validation using the FormValidator class. The first step is to create an instance of the FormValidator class for each form on the page. Next we grab all the inputs for each individual form. The next step is to add an input event listener to each input element. The input validity is tested based on the attributes added to the input elements in the HTML document. The input border will turn red, an error message will display, and the submit button will be disabled when the input is invalid. The input border will turn black, the error message will disappear, and the submit button will be enabled when the input is valid. The best part is that the input validation will also work for future forms that are added to the page._

## Future Features
1. Create an account so users can save their profiles and cards