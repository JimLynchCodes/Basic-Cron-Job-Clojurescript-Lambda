(ns basic-cljs-lambda.core
  (:require [cljs-lambda.util :as lambda]
            [cljs-lambda.context :as ctx]
            [cljs-lambda.macros :refer-macros [deflambda]]
            [cljs.reader :refer [read-string]]
            [cljs.nodejs :as nodejs]
            [cljs.core.async :as async]
            [promesa.core :as p]
            [basic-cljs-lambda.jim-twit :as jimtwit]
            [basic-cljs-lambda.string :as ll]
            [basic-cljs-lambda.ok :as kk]
            [basic-cljs-lambda.cute-little-utils.string-utils :as a])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;(def config
;  (-> (nodejs/require "fs")
;      (.readFileSync "static/config.edn" "UTF-8")
;      read-string))
;
;(defmulti cast-async-spell (fn [{spell :spell} ctx] (keyword spell)))
;
;(defmethod cast-async-spell :delay-channel
;  [{:keys [msecs] :or {msecs 1000}} ctx]
;  (go
;    (<! (async/timeout msecs))
;    {:waited msecs}))
;
;(defmethod cast-async-spell :delay-promise
;  [{:keys [msecs] :or {msecs 1000}} ctx]
;  (p/promise
;   (fn [resolve]
;     (p/schedule msecs #(resolve {:waited msecs})))))
;
;(defmethod cast-async-spell :delay-fail
;  [{:keys [msecs] :or {msecs 1000}} ctx]
;  (go
;    (<! (async/timeout msecs))
;    ;; We can fail/succeed wherever w/ fail!/succeed! - we can also
;    ;; leave an Error instance on the channel we return, or return a reject
;    ;; promised - see :delayed-failure above.
;    (ctx/fail! ctx (js/Error. (str "Failing after " msecs " milliseconds")))))




(deflambda work-magic [{:keys [magic-word] :as input} ctx]
;  (if (= (input :spell) "echo-env")
  (.log js/console (str "Environment is: " (ctx/environment ctx)))
;  (.log js/console (str "Input is: " (ctx/environment input)))

  (.log js/console (kk/well-then))
  (.log js/console (ll/ok))
  (.log js/console (a/derp))


  (jimtwit/derp)


;  42
;  (.log js/console (str "Magic-Word is: " (ctx/environment magic-word)))
  (js-obj "a" 1 "b" true "c" "hello there, caller!")

  #js{:a 1, :b true, :c nil}
  )
;)
