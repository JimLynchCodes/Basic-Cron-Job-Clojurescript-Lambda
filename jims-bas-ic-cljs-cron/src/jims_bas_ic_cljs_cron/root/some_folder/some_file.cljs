(ns some-folder.some-file
  (:require [other-folder.other-file :as other]
            [some-folder.nested-folder.nested-folder-file :as nested]))

(defn sayHeyOther []
  (other/sayHey))

(defn sayHeyNested []
  (nested/sayHey))


