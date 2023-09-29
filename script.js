// for the menu

const button = document.getElementById('menu-button');
const menuUL = document.getElementById('menu-UL');

button.addEventListener('click', function(){
  if (menuUL.classList.contains('is-active')) {
    menuUL.classList.remove('is-active')
  } else menuUL.classList.add('is-active');
});

const mobileScreen = window.matchMedia('(max-width: 600px')
const nav = document.getElementsByClassName('nav')[0]
const navStories = document.getElementById('nav-stories');
const navReviews = document.getElementById('nav-reviews');

const storyWithFlex = document.getElementsByClassName('story-with-flex')
const oneReviewMain = document.getElementsByClassName('one-review-main')

if (mobileScreen.matches) {

  if (!storyWithFlex) console.log('yep')

  let stories = document.createElement('li')
  let reviews = document.createElement('li')
  
  let storiesLink = document.createElement('a')
  storiesLink.classList.add('otherPage')
  if (storyWithFlex || oneReviewMain) storiesLink.setAttribute('href', '../stories.html')
  else storiesLink.setAttribute('href', './stories.html')
  storiesLink.innerText = "Stories"

  let reviewsLink = document.createElement('a')
  reviewsLink.classList.add('otherPage')
  if (storyWithFlex || oneReviewMain) reviewsLink.setAttribute('href', '../reviews.html')
  else reviewsLink.setAttribute('href', './reviews.html')
  reviewsLink.innerText = 'Reviews'

  stories.append(storiesLink)
  reviews.append(reviewsLink)

  navStories.replaceWith(stories)
  navReviews.replaceWith(reviews)
}