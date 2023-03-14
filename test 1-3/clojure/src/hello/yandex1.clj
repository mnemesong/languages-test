(ns hello.yandex1) 

(defn fill-rec [v el c]
  {:pre [(coll? v) (int? el) (int? c)]}
  (if (= c 0) v (conj (fill-rec v el (- c 1)) el)))

(defn count-in-arr [v i]
  {:pre [(coll? v) (int? i)]} 
  (count (filter #(= i %) v)))

(defn fill-it [p] 
  {:pre [(coll? p) (= (count p) 2)]} 
  (fill-rec [] (first p) (last p)))

(defn intersect-with-repeats [v-1 v-2]
  {:pre [(coll? v-1) (coll? v-2)]}
  (let [
        some-in-v2? (fn [i] {:pre [(int? i)]} (some #(= i %) v-2))
        map-to-counter (fn [v] {:pre [(coll? v)]}
                         (map #(vec (list % (min (count-in-arr v-1 %) (count-in-arr v-2 %)))) v))
        ] 
    (vec (flatten (map fill-it (map-to-counter (distinct (filter some-in-v2? v-1))))))))

(defn run [] 
  (let [
        v-1 [1 2 3 2 2 0]
        v-2 [5 1 2 7 3 2]
  ] 
    (println (intersect-with-repeats v-1 v-2))))