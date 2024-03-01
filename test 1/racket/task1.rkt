#lang typed/racket

(: test-arr-1 (Listof Integer))
(define test-arr-1 (list 1 2 3 2 0 2))

(: test-arr-2 (Listof Integer))
(define test-arr-2 (list 5 1 2 7 3 2))

(: repeats-cnt (-> (Listof Integer) Integer Integer))
(define (repeats-cnt l a) (length (filter (lambda ([v : Integer]) (= v a)) l)))

(: intersect-counter (-> (Listof Integer) (Listof Integer) (Listof (Pair Integer Integer))))
(define (intersect-counter l1 l2)
  (let ([uniq (set-intersect l1 l2)])
    (map (lambda ([x : Integer]) (cons x (min (repeats-cnt l1 x) (repeats-cnt l2 x))))
         uniq)))

(: append-repeats (-> (Pair Integer Integer) (Listof Integer) (Listof Integer)))
(define (append-repeats el acc)
  (append acc (build-list (cdr el)
                          (lambda ([x : Any]) (car el)))))

(: intersect-with-repeats (-> (Listof Integer) (Listof Integer) (Listof Integer)))
(define (intersect-with-repeats l1 l2)
  (foldl append-repeats
         (list)
         (intersect-counter l1 l2)))
(displayln (intersect-with-repeats test-arr-1 test-arr-2))