// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from './data';
data.push({ // normal lorem is boring so I copied a random player's post from my favorite game lol
    title: `The Struggle of Escape From Tarkov`, 
    date: `Febuary 10th, 2021`,
    firstParagraph: `Yea, I was just in that weird period where I only had the first two quests available from Prapor and Mechanic, so was limited into finding 2 shotguns while getting rocked by players on customs while trying to find scavs, which don't seem to exist at the start of the game. I decided to do a mosin only run on Woods to just try and get the Jaeger quest and got lucky enough to knock it out with no issues. Well, there were issues, because Woods had an update and it looks entirely different now. So I did get lost and panicked, but managed to get it done. As soon as that was done I was able to knock out the MP-133 portion of Prapors quest and now I have 6-7 in the queue. Next up is struggling with the even harder Customs quests: finding the stopwatch and water. I have both keys from scav runs thankfully.`,
    secondParagraph: `To add to the weird scav behavior conversation: yesterday I walked into the gas station and a scav fired two shots out the window at nothing and then just stood there. I assumed it was firing at a player, but went and looked around and there was nothing. This morning a scav charged at me with it's knife out. I panicked, shot it and it just ran by me. So I shot it in the back, assuming it was a player, but it emoted at me. I managed to kill it without realizing it until the match ended. I assumed it just kept running.`,
    thirdParagraph: `I do love that updated scavs to run, drink, check mags, wiggle, etc. Makes it harder to determine if it's a AI scav or player scav. Also, I just found out my new monitor has a feature to add a crosshair to the center of my screen. I can't wait to try this out.
    Edit 2: It seems a little off. It's probably gun dependent, but it appears that ADS ends up being slightly lower than the center of the screen. I'll have to test more when I have a gun range.`,
  })
  // the text from the third paragraph is there, but the box its contained in does not expand to fit the text
  //I will not be fixing this

const articles = document.querySelector(`.articles`);

  // Step 1: Write a component called 'articleMaker' to create an article.
  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:
function articleMaker({title, date, firstParagraph, secondParagraph, thirdParagraph}){

  const article = document.createElement(`div`);
  const arTitle = document.createElement(`h2`);
  const arDate = document.createElement(`p`);
  const par1 = document.createElement(`p`);
  const par2 = document.createElement(`p`);
  const par3 = document.createElement(`p`);
  const expBtn = document.createElement(`span`);

  article.appendChild(arTitle);
  article.appendChild(arDate);
  article.appendChild(par1);
  article.appendChild(par2);
  article.appendChild(par3);
  article.appendChild(expBtn);

  article.classList.add(`article`);
  arDate.classList.add(`date`);
  expBtn.classList.add(`expandButton`);

  arTitle.textContent = title;
  arDate.textContent = date;
  par1.textContent = firstParagraph;
  par2.textContent = secondParagraph;
  par3.textContent = thirdParagraph;
  expBtn.textContent = `+`;

  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>
  // 
  //   {three separate paragraph elements}
  //
  //   <span class="expandButton">+</span>
  // </div>

  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.

  expBtn.addEventListener(`click`, () => {
    article.classList.toggle(`article-open`);
  })

  // Step 3: Don't forget to return something from your function!

  return article;

}

  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  // to create a div.article element and append it to the DOM inside div.articles (see index.html).

  const articleValues = data.map(dataItem => {
    return articleMaker(dataItem);
  });

  articleValues.forEach(articleValues => {
    articles.appendChild(articleValues);
  });

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  // Refresh the page to see the new article.

  
