const url = 'https://picsum.photos/v2/list?limit=30'
const bigPicture = document.getElementById('bigPicture')
const smallPictures = document.getElementById('smallPictures')

function getData() {
  axios.get(url)
    .then(resp => {
      showBigPictures(resp.data)
      showThumbnails(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
}

function showBigPictures(responseData) {
  responseData.map(picture => {
    let bigPictureElement = document.createElement('div')
    let attributeBig = document.createAttribute('class')
    attributeBig.value = "swiper-slide"
    bigPictureElement.setAttributeNode(attributeBig)
    bigPictureElement.innerHTML = `<img loading="lazy" src="https://picsum.photos/id/${picture.id}/1920/1440"><p class='author'>${picture.author}</p>`
    bigPicture.appendChild(bigPictureElement)
  })
}

function showThumbnails(responseData) {
  responseData.map(picture => {
    let thumbnailElement = document.createElement('div')
    let attributeThumb = document.createAttribute('class')
    attributeThumb.value = "swiper-slide"
    thumbnailElement.setAttributeNode(attributeThumb)
    thumbnailElement.innerHTML = `<img src="https://picsum.photos/id/${picture.id}/400/300">`
    smallPictures.appendChild(thumbnailElement)
  })
}

getData()
























let galleryThumbs = new Swiper('.gallery-thumbs', {
  observer: true,
  observeParents: true,
  direction: 'vertical',
  spaceBetween: 5,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

let galleryTop = new Swiper('.gallery-top', {
  keyboard: true,
  observer: true,
  observeParents: true,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  }
});