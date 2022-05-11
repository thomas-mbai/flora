const cacheName='v1'
// call install event
self.addEventListener('install', (e)=>{
    //console.log("Service worker installed")
})

// call activate event
self.addEventListener('activate', (e)=>{
    //console.log("Service worker activated")
    e.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache!==cacheName){
                        //console.log("clearing old cache")
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

// call the fetch function
self.addEventListener('fetch', e=>{
    //console.log("Service worker fetching...")
    // e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
    e.respondWith(
        fetch(e.request)
            .then(res=>{
                const resClone=res.clone()
                caches  
                    .open(cacheName)
                    .then(cache=>{
                        cache.put(e.request,resClone)
                    })
                return res
            })
        .catch(err=>caches.match(e.request).then(res=>res))
    )
})
