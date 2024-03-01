(ns neural.node)

(defn exp [] 2.7183)

(defn arr-of-nums? [x] (and (coll? x) (every? number? x)))

(defn summate 
  "Суммирует массив значений полученных с предыдущего слоя" 
  [c-vals]
  {:pre [(arr-of-nums? c-vals)]}
  (reduce + 0 c-vals))

(defn activ-func
  "Применяет функцию активации к значению"
  [n-val]
  {:pre [(number? n-val)]}
  (/ 1 (+ 1 (Math/pow (exp) (* -1 n-val)))))