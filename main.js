// GALLERY START
displayGalleryOnLoad();

function displayGalleryOnLoad() {
    
    const URL = window.location.href.split('#');
    console.log(window.location.href)

    // checks if the default page should be loaded
    if(URL.length == 1) {
        return;
    }

    const selectedGallery = "#" + URL[URL.length - 1];
    $(`${selectedGallery}`).show();
    $(".slideshow-container").not(`${selectedGallery}`).hide();
}

// any time one of the .gallery-links is clicked...
$('.main-nav1').click(function () {

    console.log("hello")

    const selectedGallery = $(this).attr('href');
    console.log(selectedGallery)

    $(`${selectedGallery}`).show();
    $(".slideshow-container").not(`${selectedGallery}`).hide();
})

// function generateAllImages() {
//     const mainImage = $(".gallery a img").parent()
//     const allGallery = $("#all .gallery")
    
//     for (let i = 0; i < mainImage.length; i++) {
//         allGallery.append(mainImage[i])
//     }
// }

// generateAllImages()
// GALLERY END

// SLIDESHOW START
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// // SLIDESHOW END

//MULTIPLE START
// let slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
// showSlides(1, 0);
// showSlides(1, 1);



// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }
//MULTIPLE END

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

