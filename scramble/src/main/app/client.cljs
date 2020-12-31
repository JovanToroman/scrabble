(ns app.client
  (:require
   [app.application :refer [app]]
   [app.ui :as ui]
   [com.fulcrologic.fulcro.application :as app]))

(defn ^:export init []
  (app/mount! app ui/Scramble "app"))

(defn ^:export refresh []
  (app/mount! app ui/Scramble "app"))