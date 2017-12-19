(defproject jims-bas-ic-cljs-cron "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [io.nervous/cljs-lambda    "0.3.5"]]
  :plugins [[lein-npm                    "0.6.2"]
            [io.nervous/lein-cljs-lambda "0.6.6"]
            [lein-cljsbuild "1.1.7"]]
  :cljsbuild {
               :builds [{
                        ; The path to the top-level ClojureScript source directory:
                          :source-paths ["src-cljs"]
                          ; The standard ClojureScript compiler options:
                          ; (See the ClojureScript compiler documentation for details.)
                          :compiler {
                                      :output-to "war/javascripts/main.js"  ; default: target/cljsbuild-main.js
                                      :optimizations :whitespace
                                      :pretty-print true}}]})
  :npm {:dependencies [[serverless-cljs-plugin "0.1.2"]]}
  :repl-options {:init-ns jims_bas_ic_cljs_cron.core}

  :cljs-lambda {:compiler
                {:inputs  ["src"]
                 :options {:output-to     "target/jims-bas-ic-cljs-cron/jims_bas_ic_cljs_cron.js"
                           :output-dir    "target/jims-bas-ic-cljs-cron"
                           :target        :nodejs
                           :language-in   :ecmascript5
                           :optimizations :none
                           :repl-options {:init-ns foo.core}
}}})
