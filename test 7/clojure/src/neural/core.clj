(ns neural.core
  (:gen-class)
  (:require [neural.node :refer :all]))

(defn init-data []
  (map #(- (* (rand) 10) 5 (* % 0)) (vec (range 1000000))))

(defn test-performance []
  (def x (init-data))
  (def start (System/currentTimeMillis))
  (def res (reduce + 0 (map #(activ-func %) x)))
  (def end (System/currentTimeMillis))
  (println (- end start)))
           
(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (test-performance))

