(ns jims-bas-ic-cljs-cron.derp
  (:require [cljsjs.moment :as m])
  )

(defn hola [hey]
  (apply max [1 4 5 8 12 1.3]))


;(defn mapWithMultipleKeys []
;  (:b {\a 32 :b 5 \t 231 \c 23}))
;
;(println (mapWithMultipleKeys) )
;
;
;;; Sets are collections of values. Either hash-set or sorted set
;(defn makeSet []
; ((hash-set 1 2 4 5 3 4 2 7)  ))
;
;;; get max element of set
;(defn makeSet []
;  (apply max (hash-set 1 2 4 5 3 4 2 7)  ))
;
;;; Sets can me "hash-sets" (as in key / value pairs, like maps) or regular collections.
;
;
;
;(defn makeMap []
;  {1 2 3 4})
;
;;;same as
;
;(defn makeMap []
;  '{1 2 3 4}
;      )
;
;;; prints out: {1 2, 3 4}
;
;(defn makeMap []
;   ('{1 2 3 4} 1))
;
;;; returns 2
;
;(defn makeKeywordSet []
;  (hash-set '(:g 1 :b  2 :c 4 5 3 4 2)))
;
;;; Converting a map to a set makes it basically a map of key/value pairs with only unique keys.
;(defn makeUniqueKeyedMap []
;  (hash-set '{:g 1 :b  2 :c 4 :g 5 :b 3 :a 4 :g 2} ))
;
;
;(println (makeUniqueKeyedMap))



