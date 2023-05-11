// var imageContainer = document.getElementsByTagName
const buttonLeft = document.getElementById('scrollLeft');
const buttonRight = document.getElementById('scrollRight');

buttonRight.onclick = function () {
  console.log("hr");
  document.getElementById('imageContainer').scrollLeft -= 20;
};
buttonLeft.onclick = function () {
  console.log("hl");
  document.getElementById('imageContainer').scrollLeft += 20;
};
// function requestDemo() {
//     this.popupHandlerService.requestDemoEnabled = true;
//   }
// function scrollLeft() {
//   console.log("hl");
//     this.imageContainer.nativeElement.scrollTo({ left: (this.imageContainer.nativeElement.scrollLeft - 400), block: "start", inline: "nearest" });
//   }

// function scrollRight() {
//   console.log("hr");
//     this.imageContainer.nativeElement.scrollTo({ left: (this.imageContainer.nativeElement.scrollLeft + 400), block: "start", inline: "nearest" });
//   }

