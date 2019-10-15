var form = document.querySelector ('.hotel-form');
var button = document.querySelector ('.button-search-hotel');

form.classList.remove('hotel-form-show');

button.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.toggle('hotel-form-hidden');
})
