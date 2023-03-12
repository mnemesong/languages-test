(ns hello.yandex2)

(defn in-count [acc v]
  (if (empty? acc) (list v) (if (= (first (last acc)) (first v))
                              (conj (vec (drop-last acc)) (list (first v) (inc (last (last acc)))))
                              (conj (vec acc) (list (first v) 1)))))

(defn squash-it [v-seq]
  (apply str (map (fn [a] (apply str (str (first a)) (if (> (last a) 1) (str (last a)) ""))) v-seq)))

(defn cache-it [s]
  (let [
        init-chars-counter (fn [ca-charr] (map #(list % 1) ca-charr))
        reduce-char-counters (fn [char-counter] (reduce in-count [] char-counter))
  ] (squash-it (reduce-char-counters (vec (init-chars-counter (char-array s)))))))

(defn run []
  (let [
        s "AAABBBCCXYZDDDDAAAABB"
  ] (println (cache-it s))))