var slide_index = 1;
var slides = document.getElementsByClassName('slides');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

//for showing the first image
  displaySlides(slide_index);

  //listen for next btn click
  next.addEventListener('click', nextSlide);
  //listen for prev btn click
  prev.addEventListener('click', prevSlide);

  //next slider function
  function nextSlide() {
      displaySlides(slide_index += 1);
  }

  // prev slider function
  function prevSlide() {
      displaySlides(slide_index -= 1);
  }

  function displaySlides(n) {
    if(n > slides.length) {
      slide_index = 1;
    }
    if(n < 1) {
      slide_index = slides.length;
    }

    // hide all the slides
    for( var i = 0; i < (slides.length); i++) {
      console.log('slide index'+ slide_index);
      slides[i].style.display = 'none';
    }
    // set current slide to visible
    slides[slide_index - 1].style.display = 'block';
  }
