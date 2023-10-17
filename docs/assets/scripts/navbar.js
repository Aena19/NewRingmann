function myExtObject()
{
  var links = document.querySelectorAll(".menu-animation")

  links.forEach((l) => {
    if(l.innerHTML != "Technical")
      l.addEventListener("click",myFunction)
  })

  function myFunction() {
    var elem = document.getElementById('navBarButton')
     elem.setAttribute('aria-expanded',false)

    var elem = document.getElementById('collapsibleNavbar')

    elem.classList.add('hide');
    elem.classList.remove('show');

  }

}