(defproject jims-bas-ic-cljs-cron "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [io.nervous/cljs-lambda    "0.3.5"]
                 [cljsjs/moment "2.17.1-1"]
                 [cljsjs/async "2.0.0-rc.4-0"]]
  :plugins [[lein-npm                    "0.6.2"]
            [io.nervous/lein-cljs-lambda "0.6.6"]
            [org.bodil/lein-noderepl "0.1.11"]]
  :npm {:dependencies [[serverless-cljs-plugin "0.1.2"]]}
  :repl-options {:init-ns jims-bas-ic-cljs-cron.core}  ; *** note: dashes in namespaces ***

  :cljs-lambda {:compiler
                 {:inputs  ["src"]
                  :options {:output-to     "target/jims-bas-ic-cljs-cron/jims_bas_ic_cljs_cron.js"
                            :output-dir    "target/jims-bas-ic-cljs-cron"
                            :target        :nodejs
                            :language-in   :ecmascript5
                            :optimizations :none
                            }}})