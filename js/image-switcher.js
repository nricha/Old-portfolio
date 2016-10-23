function handleImageClick(event) {
  console.log(event.srcElement.attributes);
  imageSwitcherFullImage.src = event.srcElement.attributes['data-full-img'].nodeValue;
}

var imageSwitcher = document.querySelector('[image-switcher]');
var firstImageThumbnail = document.querySelector('[image-switcher] img');
var imageSwitcherFullImage = document.querySelector('#image-switcher-fullimage');
imageSwitcherFullImage.src = firstImageThumbnail.attributes['data-full-img'].nodeValue;
imageSwitcher.addEventListener('click', handleImageClick);

