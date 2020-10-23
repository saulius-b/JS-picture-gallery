const url = 'https://picsum.photos/v2/list?limit=30'
const bigPicture = document.getElementById('bigPicture')
const smallPictures = document.getElementById('smallPictures')

function getData() {
  axios.get(url)
    .then(resp => {
      let receivedData = resp.data
      receivedData.map(picture => {
        // Adding the big pictures
        let div = document.createElement('div')
        let att = document.createAttribute('class')
        att.value = "swiper-slide"
        div.setAttributeNode(att)
        div.innerHTML = `<img loading="lazy" src="https://picsum.photos/id/${picture.id}/1920/1440">`
        // Adding author
        let author = `<p class='author'>${picture.author}</p>`
        div.innerHTML = div.innerHTML + author
        bigPicture.appendChild(div)
        // Adding the small pictures
        let divSmall = document.createElement('div')
        let attSmall = document.createAttribute('class')
        attSmall.value = "swiper-slide"
        divSmall.setAttributeNode(attSmall)
        divSmall.innerHTML = `<img src="https://picsum.photos/id/${picture.id}/400/300">`
        smallPictures.appendChild(divSmall)
      })
    })
    .catch(err => {
      console.log(err)
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