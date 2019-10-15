var form = document.querySelector ('.hotel-form');
var button = document.querySelector ('.button-search-hotel');
var arrival = document.querySelector('[name=arrival-date');
var departure = form.querySelector('[name=departure-date');
var adult = form.querySelector('[name=adult-amount');
var child = form.querySelector('[name=child-amount');
var isStorageSupport = true;
var storageadult = "";
var storagechild = "";

try {
    storageadult = localStorage.getItem('adult');
    storagechild = localStorage.getItem('child');
    } catch (err) {
    isStorageSupport = false;
}

form.classList.remove('hotel-form-show');

button.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.toggle('hotel-form-hidden');
    form.classList.remove('hotel-form-error');
    if (storageadult && storagechild) {
        adult.value = storageadult;
        child.value = storagechild;
      }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!form.classList.contains('hotel-form-hidden')) {
        form.classList.add('hotel-form-hidden');
        form.classList.remove('hotel-form-error');
      }
    }
});

form.addEventListener('submit', function(evt) {
    if (!arrival.value || !departure.value || !adult.value || !child.value) {
    evt.preventDefault();
    form.classList.remove('hotel-form-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add("hotel-form-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem('adult', adult.value);
        localStorage.setItem('child', child.value);
    }
}
});