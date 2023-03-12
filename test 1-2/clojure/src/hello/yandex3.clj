(ns hello.yandex3)

(defn mark-phrase [s-phrase]
  [s-phrase (apply str (sort (char-array s-phrase)))])

(defn clear-marks [m-map-marked-phrases]
  (vec (map (fn [x] (vec (map (fn [v-marked] (first v-marked)) (last x)))) m-map-marked-phrases)))

(defn group-marked-phrases [l-phrases]
  (clear-marks (group-by (fn [x] (last x)) l-phrases)))

(defn run []
  (println (group-marked-phrases (map mark-phrase ["eat", "tea", "tan", "ate", "nat", "bat"]))))