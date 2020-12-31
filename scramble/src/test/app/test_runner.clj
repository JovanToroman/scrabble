(ns app.test-runner
  (:require [clojure.test :as t]
            [app.scramble]))

(defn -main []
      (t/run-tests `app.scramble))
