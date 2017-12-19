(ns gagga)

(def myatom (atom []))

(js/async.parallel
  (clj->js [(fn [callback]
              (js/setTimeout
                (fn []
                  (println "yo")
                  (swap! myatom conj "one")
                  (callback nil "one")) 4000))
            (fn [callback]
              (js/setTimeout
                (fn []
                  (println "derpy derp")
                  (swap! myatom conj "two")
                  (callback nil "two")) 4000))])
  (fn [error response]
    (println response) ; #js [one two]
    (println @myatom)  ; [two one]
    ))



// ======

(def myatom (atom []))

(js/async.series
  (clj->js [(fn [callback]
              (js/setTimeout
                (fn []
                  (println "hi")
                  (swap! myatom conj "one")
                  (callback nil "one")) 4000))
            (fn [callback]
              (js/setTimeout
                (fn []
                  (println "hey there")
                  (swap! myatom conj "two")
                  (callback nil "two")) 4000))])
  (fn [error response]
    (println response) ; #js [one two]
    (println @myatom)  ; [one two]
    ))