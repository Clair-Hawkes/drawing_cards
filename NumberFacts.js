"use strict"

const BASEURL = "http://deckofcardsapi.com/api/deck/";
let deckId = '';

/**GetDeckID takes no parameters
 * Calls deckofcardsAPI
 * Returns a deckId as string.
 */
async function getDeckId() {
  const deckP = await axios.get(`${BASEURL}new/shuffle/?deck_count=1`);
  // const deckId = deckP.data.deck_id;
  // return deckId;
  deckId = deckP.data.deck_id;
}

/**drawCard takes a deckId (Str) as parameter.
 * Calls deckofcardsAPI
 * Returns card value and suit in a single string.
 */
async function drawCard(deckId) {
  const card1P = await axios.get(`${BASEURL}${deckId}/draw/?count=1`);
  // return `${card1P.data.cards[0].value} of ${card1P.data.cards[0].suit}`
  return card1P.data.cards[0].image;
}

/**GetDeckAndDrawTwoCards takes no parameters.
 * Console.logs()
 *
 */
async function getDeckAndDrawTwoCards() {
  const deckId = await getDeckId();
  const card1 = await drawCard(deckId);
  const card2 = await drawCard(deckId);
  console.log(card1 + " , " + card2)
}

/**createCard takes a card image string value
 * Creates a img tag nested in a div and appends to the DOM.
 * Returns the created card element.
*/
function createCard(img){
  const $holder = $("<div>");
  const $imgTag = $("<img>");

  $imgTag.attr('src',img);
  $imgTag.attr('style',`transform:rotate(${Math.random()}turn)`);
  // transform: rotate(0);


  $holder.append($imgTag);

  return $holder;
}

/** appendCard takes:
 * Call drawCard for the card's image value.
 * Calls createCard to get html
 * Appends to DOM in #placedcards div.
 *  */
async function appendCard(){
  console.log(appendCard);
  console.log(deckId);
  const cardImage = await drawCard(deckId);
  const cardHtml = createCard(cardImage);

  // $("#placedcards").prepend(cardHtml);
  $("#placedcards").append(cardHtml);

}





// EVENT LISTENER FOR PAGE LOAD, CALL getDeck...
$("body").ready(getDeckId)



// EVENT LISTENER for button click, Call drawCard...
// $("#draw").on("click",deckId,appendCard)
$("#draw").on("click",appendCard)





// Create a div
// Create a nested img tag
// Set the img tag source to card img value
//






























// const FAVNUM = '42';
// const FAVNUMS = '42,45,57..60'
// const NUMAPIURL = `http://numbersapi.com/`;

// /**
//  * callNumAPI will take a fav num; call numsAPI;
//  * Create a htmlTag of num fact; And append to the html Dom,
//  *  Returns nothing.
//  */
// async function callNumAPI(favNum){
//   const factP = await axios.get(`${NUMAPIURL}${FAVNUMS}`);
//   const $htmlBody = $("body")
//   console.log(factP);

//   for(let fact in factP.data){
//     console.log
//     const $paraTag = $("<p></p>");

//     $paraTag.text(factP.data[fact]);
//     $htmlBody.append($paraTag);
//   }
// }






