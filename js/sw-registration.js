
//register service serviceWorker
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
           .then(function() {console.log("Service Worker Registered!");
       })
           .catch(function () {
            console.log("Registration failed!");
    });

}
