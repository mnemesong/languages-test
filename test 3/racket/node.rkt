#lang typed/racket

(provide activ-func)

(: activ-func (-> Flonum Flonum))
(define (activ-func x)
  (/ 1 (+ 1 (exp (* -1 x)))))