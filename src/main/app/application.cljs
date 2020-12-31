(ns app.application
  (:require
   [com.fulcrologic.fulcro.application :as app]
   [com.wsscode.pathom.core :as p]
   [com.fulcrologic.fulcro.networking.http-remote :as http]))

(defn contains-pathom-errors?
  [{:keys [body]}]
  (when (map? body)
    (let [values (vals body)]
      (reduce
       (fn [error? v]
         (if (or
              (and (map? v) (contains? (set (keys v)) ::p/error))
              (= v ::p/error))
           (reduced true)
           error?))
       false
       values))))

(defn remote-error?
  [result]
  (or (app/default-remote-error? result) (contains-pathom-errors? result)))

(defonce app (app/fulcro-app
              {:remotes       {:remote (http/fulcro-http-remote {})}
               :remote-error? remote-error?}))