(ns app.mutations
  (:require
   [com.wsscode.pathom.connect :as pc :refer [defmutation]]
   [taoensso.timbre :as log]
   [com.wsscode.pathom.core :as p]))

(defn scramble?
  "This function returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false"
  [str1 str2]
  (assert (and (string? str1) (string? str2)) "Input parameters to scramble were not strings")
  (assert (and (re-matches #"^[a-z]+" str1)
               (re-matches #"^[a-z]+" str2)) "Strings must not be empty and should only contain lowercase letters")
  (if (>= (count str1) (count str2))
    (or (= str1 str2)
        (let [frequencies-str1 (frequencies (seq str1))
              frequencies-str2 (frequencies (seq str2))]
          (every? (fn [letter]
                    (and (.contains str1 (str letter))
                         (>= (get frequencies-str1 letter)
                             (get frequencies-str2 letter)))) str2)))
    false))

(defmutation ^{:doc "Check if `str1` and `str2` can be scrambled"}
  scramble [_ {:keys [str1 str2]}]
  {::pc/params [:str1 :str2]
   ::pc/output [:answer]}
  (try
    {:answer (scramble? str1 str2)}
    (catch AssertionError as
      (log/error as)
      {::p/error (.getMessage as)})))

(def mutations [scramble])