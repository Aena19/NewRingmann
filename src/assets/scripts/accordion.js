function myExtObject()
{
  // var elem = document.getElementById("acc-btn")
  // elem.addEventListener("click", myFunction);

  var accordionButtons = document.querySelectorAll('.accordion-button')

  accordionButtons.forEach((ab) => {
    ab.addEventListener("click", myFunction)
  })
}