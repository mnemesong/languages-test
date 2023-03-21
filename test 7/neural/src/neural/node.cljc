(ns neural.node)

(defn arr-of-nums? [x] (and (coll? x) (every? number? x)))

(defn summate 
  "Суммирует массив значений полученных с предыдущего слоя" 
  [c-vals]
  {:pre [(arr-of-nums? c-vals)]}
  (reduce + 0 c-vals))