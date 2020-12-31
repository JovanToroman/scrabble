(ns app.parser
  (:require
   [com.wsscode.pathom.core :as p]
   [com.wsscode.pathom.connect :as pc]
   [taoensso.timbre :as log]
   [app.mutations :as mutations]))

(def resolvers [mutations/mutations])

(defn process-error [_env err]
  (log/error err)
  {::p/error (p/error-str err)})

(def pathom-parser
  (p/parser {::p/env     {::p/reader                 [p/map-reader
                                                      pc/reader2
                                                      pc/ident-reader
                                                      pc/index-reader]
                          ::pc/mutation-join-globals [:tempids]}
             ::p/mutate  pc/mutate
             ::p/plugins [(pc/connect-plugin {::pc/register resolvers})
                          (p/env-plugin {::p/process-error process-error})
                          p/error-handler-plugin]}))

(defn api-parser [query]
  (pathom-parser {} query))
