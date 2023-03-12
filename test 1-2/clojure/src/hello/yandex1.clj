(ns hello.yandex1)

(defn fill-rec [v el c] (if (= c 0) v (conj (fill-rec v el (- c 1)) el)))

(defn intersect-with-repeats [v-1 v-2]
  (let [
        some-in-v2? (fn [i] (some #(= i %) v-2))
        count-in-arr (fn [v i] (count (filter #(= i %) v)))
        map-to-counter (fn [v] (map #(vec (list % (min (count-in-arr v-1 %) (count-in-arr v-2 %)))) v))
        fill-it (fn [p] (fill-rec [] (first p) (last p))) 
        ] (vec (flatten (map fill-it (map-to-counter (distinct (filter some-in-v2? v-1))))))))

(defn run [] 
  (let [
        v-1 [1 2 3 2 2 0]
        v-2 [5 1 2 7 3 2]
  ] (println (intersect-with-repeats v-1 v-2))))