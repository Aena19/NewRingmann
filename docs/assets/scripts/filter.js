function filterObject(){

   var dropdownLinks = document.querySelectorAll(".dropdown-item");
console.log('dropdown-item')
   dropdownLinks.forEach(function(link) {
      console.log(link.id)
   link.addEventListener("click", function(event) {
      console.log(event.target.id)
      event.stopPropagation();
   });
})

};