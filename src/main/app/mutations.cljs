(ns app.mutations
  (:require [com.fulcrologic.fulcro.mutations :refer [defmutation]]
            [com.wsscode.pathom.core :as p]))

(defmutation scramble [_]
  (action [{:keys [state ref]}]
          (swap! state update-in ref dissoc :ui/answer :ui/error))
  (remote [_env] true)
  (ok-action [{:keys [state result ref]}]
             (let [answer (get-in result [:body `scramble :answer])]
               (swap! state assoc-in (into ref [:ui/answer]) answer)))
  (error-action [{:keys [state result ref]}]
                (let [{error-message ::p/error} (get-in result [:body `scramble])]
                  (swap! state assoc-in (into ref [:ui/error]) error-message))))
