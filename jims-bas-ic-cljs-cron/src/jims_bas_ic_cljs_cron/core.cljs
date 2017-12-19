(ns jims-bas-ic-cljs-cron.core
  (:require [cljs-lambda.macros :refer-macros [defgateway]])
  )


 (defgateway echo [event ctx]
 {:status  200
 :headers {:content-type (-> event :headers :content-type)}
 :body    (event :body)} )

(defn derp []
  (println "Hi")
  20)





;(defn okThen [n]
;  (* (derp) n)


  ;(okThen)