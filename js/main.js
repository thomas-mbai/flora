if('serviceWorker' in navigator){
    //console.log("Service Worker Supported")
    window.addEventListener('load',()=>{
        navigator.serviceWorker
            .register("/flora/js/sw_cached_pages.js")
            .then()
            .catch(error=>console.log(`service worker error ${error}`))
    })
}