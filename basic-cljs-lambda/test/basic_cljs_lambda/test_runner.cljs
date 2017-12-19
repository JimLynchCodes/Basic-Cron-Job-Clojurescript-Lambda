(ns basic-cljs-lambda.test-runner
 (:require [doo.runner :refer-macros [doo-tests]]
           [basic-cljs-lambda.core-test]
           [cljs.nodejs :as nodejs]))

(try
  (.install (nodejs/require "source-map-support"))
  (catch :default _))

(doo-tests
 'basic-cljs-lambda.core-test)
