(ns app.ui
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :refer [div button input h1 p h3 i label h4 h5]]
   [com.fulcrologic.fulcro.mutations :as m]
   [app.mutations :as mut]))

(defsc Scramble [this {:ui/keys [str1 str2 answer error]}]
  {:ident (fn [] [:scramble/id :scramble1])
   :query [:ui/str1
           :ui/str2
           :ui/answer
           :ui/error]}
  (div :.container.mt-4
       (div :.row
            (h1 :.text-justify "Hi! Welcome to the scramble tester")
            (p :.lead "Please enter two strings in the form fields bellow. Strings need to be lowercase and contain only
            letters. You can then check if the second string can be created by rearranging letters of the first one. "
               (i "Have fun!")))
       (div :.row.col-md-4
            (label :.mt-3 "String 1")
            (input :.form-control {:type "text" :value (or str1 "") :onChange #(m/set-string! this :ui/str1 :event %)})
            (label :.mt-3 "String 2")
            (input :.form-control {:type "text" :value (or str2 "") :onChange #(m/set-string! this :ui/str2 :event %)})
            (button :.btn.btn-primary.mt-3 {:onClick #(comp/transact! this [(mut/scramble {:str1 (or str1 "")
                                                                                           :str2 (or str2 "")})])}
                    "Scramble"))
       (div :.row.col-md-8.mt-3
            (when (some? error)
              (div (h4 "Scramble failed with the following error: ")
                   (h5 :.text-danger error))))
       (div :.row.col-md-8
            (when (some? answer)
              (if answer
                (h3 :.text-success "String 2 can be created from letters in string 1")
                (h3 :.text-danger "String 2 cannot be created from letters in string 1"))))))
