(defproject basic-cljs-lambda "0.1.0-SNAPSHOT"
  :description "FIXME"
  :url "http://please.FIXME"
  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.clojure/core.async    "0.2.395"]
                 [io.nervous/cljs-lambda    "0.3.5"]]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-npm       "0.6.0"]
            [lein-doo       "0.1.7"]
            [io.nervous/lein-cljs-lambda "0.6.6"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src"]
  :cljs-lambda
  {:defaults      {:role "arn:aws:iam::954459734159:role/cljs-lambda-default"}
   :resource-dirs ["static"]
   :functions
   [{:name   "work-magic"
     :invoke basic-cljs-lambda.core/work-magic}]}
  :cljsbuild
  {:builds [{:id "basic-cljs-lambda"
             :source-paths ["src"]
             :compiler {:output-to     "target/basic-cljs-lambda/basic_cljs_lambda.js"
                        :output-dir    "target/basic-cljs-lambda"
                        :source-map    true
                        :target        :nodejs
                        :language-in   :ecmascript5
                        :optimizations :none}}
            {:id "basic-cljs-lambda-test"
             :source-paths ["src" "test"]
             :compiler {:output-to     "target/basic-cljs-lambda-test/basic_cljs_lambda.js"
                        :output-dir    "target/basic-cljs-lambda-test"
                        :target        :nodejs
                        :language-in   :ecmascript5
                        :optimizations :none
                        :main          basic-cljs-lambda.test-runner}}]})
