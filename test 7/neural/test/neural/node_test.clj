(ns neural.node-test
  (:require [clojure.test :refer :all]
            [neural.node :refer :all]))

(deftest test-summate
  (testing "summate"
    (is (= (summate [0.7 3 2.5 4]) 10.2))))

(deftest test-exp
  (testing "exp"
    (is (= 2.7183 (exp)))))

(deftest test-activ-func1
  (testing "activ-func1"
    (is (< (abs (- 1 (activ-func 10))) 0.1))))

(deftest test-activ-func2
  (testing "activ-func2"
    (is (< (abs (- 0 (activ-func -10))) 0.1))))

(deftest test-activ-func3
  (testing "activ-func3"
    (is (< (abs (- 0.5 (activ-func 0))) 0.1))))