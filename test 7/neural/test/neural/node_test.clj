(ns neural.node-test
  (:require [clojure.test :refer :all]
            [neural.node :refer :all]))

(deftest test-summate
  (testing "summate"
    (is (= (summate [0.7 3 2.5 4]) 10.2))))