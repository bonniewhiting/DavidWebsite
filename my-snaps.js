const main = document.getElementById('my-snaps-main')

function makeSnaps(data) {
    data.forEach(makeOneSnap)
}

const makeOneSnap = snap => {
    console.log(snap)
    const snapDiv = document.createElement('div')
    const snapLink = document.createElement('a')
    const snapMedia = document.createElement('img')

    snapDiv.className = 'one-snap'
    snapLink.href = snap.permalink
    snapLink.rel = 'noopener noreferrer'
    snapLink.target = '_blank'
    snapMedia.src = snap.mediaUrl
    snapMedia.alt = "an image or video from David's Instagram"

    if (snap.mediaType === "VIDEO") snapMedia.src = snap.thumbnailUrl

    snapLink.append(snapMedia)
    snapDiv.append(snapLink)

    main.append(snapDiv)
}

function getSnaps() {
    fetch('https://feeds.behold.so/q4tvfnDOWZyGcj3lmFXJ')
        .then(res => res.json())
        .then((data) => (makeSnaps(data)))
}

getSnaps()




