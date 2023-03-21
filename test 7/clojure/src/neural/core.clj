(ns neural.core
  (:gen-class)
  (:require [neural.node :refer :all]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn test-performance []
  (println (System/currentTimeMillis)
           (reduce + 0 (map #(activ-func %) (vec (range 1000000))))
           (System/currentTimeMillis)))
