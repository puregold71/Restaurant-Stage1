
//register service serviceWorker
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
           .then(registration => console.log("Service Worker Registered!"))
           .catch(error =>  console.log("Registration failed!"));

}
