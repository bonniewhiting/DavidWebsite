// this was for the dropdowns for the navigation but I figured out a CSS solution

const navReviews = document.getElementById('nav-reviews')
const navStories = document.getElementById('nav-stories')

const allReviews = document.getElementsByClassName('review-link')
const allStories = document.getElementsByClassName('story-link')

navReviews.addEventListener('mouseover', () => {
    console.log("it's working!")
    const target = document.getElementsByClassName('reviews-dropdown')[0]
    target.classList.toggle('show')
})

console.log(allReviews)

navStories.addEventListener('mouseover', () => {
    console.log("it's working!")
    const target = document.getElementsByClassName('stories-dropdown')[0]
    console.log(target)
    target.classList.toggle('show')
})

window.onclick = function (event) {
    if (!event.target.matches('#nav-reviews')) {
        let dropdowns = document.getElementsByClassName('reviews-dropdown')
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show')
        }
    }
    if (!event.target.matches('#nav-stories')) {
        let dropdowns = document.getElementsByClassName('stories-dropdown')
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show')
        }
    }
}


