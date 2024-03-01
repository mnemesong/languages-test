#lang typed/racket
(require "node.rkt")
(require racket/flonum)

(: rang (Listof Flonum))
(define rang (map (lambda (x) (random)) (range 1000000)))

(: date-start Integer)
(define date-start (current-milliseconds))

(: sum-flonum (-> Flonum Flonum Flonum))
(define (sum-flonum x y)
  (+ x y))

(: result Flonum)
(define result
  (foldl sum-flonum 0.0 (map activ-func rang)))

(: date-end Integer)
(define date-end (current-milliseconds))

(displayln (format "Date diff: ~v secs" (/ (- date-end date-start) 1000.0)))
(displayln (format "Result value: ~v" result))