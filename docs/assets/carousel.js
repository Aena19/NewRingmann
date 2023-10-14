

function name(){
  //  alert("hi there");

    
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {interval: 500, wrap: true})
var slides = document.querySelectorAll('.carousel .carousel-item')

slides.forEach((el) => {
    //alert('hi')
    // number of slides per carousel-item
    const minPerSlide = slides.length
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = slides[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

  }