#lang typed/racket

(define-type Counter (Pair Char Integer))

(: last-element (-> (Listof Counter) Counter))
(define (last-element l)
  (cond ((null? (cdr l)) (car l))
        (else (last-element (cdr l)))))

(: remove-last (-> (Listof Counter) (Listof Counter)))
(define (remove-last l)
  (reverse (cdr (reverse l))))

(: add-last(-> (Listof Counter) Counter (Listof Counter)))
(define (add-last l el)
  (append l (list el)))

(: str-cont-reducer (-> Char (Listof Counter) (Listof Counter)))
(define (str-cont-reducer el acc)
  (if (empty? acc)
      (list (cons el 1))
      (let ([last-el (last-element acc)])
        (if (char=? (car last-el) el)
            (add-last (remove-last acc) (cons (car last-el) (+ (cdr last-el) 1)))
            (append acc (list (cons el 1)))))))

(: serialize-counter (-> Counter String))
(define (serialize-counter cntr)
  (if (= (cdr cntr) 1)
      (string (car cntr))
      (string-append (string (car cntr)) (~v (cdr cntr)))))

(: serialize-pair (-> (Listof Counter) String))
(define (serialize-pair lc)
  (foldl string-append "" (map serialize-counter lc)))

(: serialize-str (-> String String))
(define (serialize-str s)
  (serialize-pair (foldl str-cont-reducer (list) (string->list s))))

(serialize-str "AAABBBCCXYZDDDDAAAABB")