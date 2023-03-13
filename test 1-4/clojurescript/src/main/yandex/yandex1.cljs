(ns yandex.yandex1)

(defn counter? [x]
  (and (coll? x)
       (not (empty? x.el))
       (not (empty? x.c))))

(defn count-same [el arr]
  {:pre [(int? el) (coll? arr)]}
  (count (filter #(= el %) arr)))

(defn count-min-in-2-arrs [el arr1 arr2]
  {:pre [(int? el) (coll? arr1) (coll? arr2)]}
  [:el el :c (min (count-same el arr1) (count-same el arr2))])

(defn yandex1 [arr1 arr2]
  { :pre [(coll? arr1) (coll? arr2)] }
  (map #(count-min-in-2-arrs % arr1 arr2) 
       (distinct (filter #(some (fn [x] (= % x)) arr2) arr1))))