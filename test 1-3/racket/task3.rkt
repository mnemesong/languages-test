#lang typed/racket

(define-type Grouper (Pair String String))

(: words-to-groups-mapper (-> String Grouper))
(define (words-to-groups-mapper s)
  (let ([idstr (list->string (map integer->char
                                  (sort (map char->integer (string->list s)) >)))])
    (cons idstr s)))

(define-type Groupstr (Pair String (Listof String)))

(: groupstr-add-mapper (-> Groupstr Grouper Groupstr))
(define (groupstr-add-mapper el g)
  (if (string=? (car el) (car g))
      (cons (car el) (append (cdr el) (list (cdr g))))
      el))

(: groupstr-make-add-mapper (-> Grouper (-> Groupstr Groupstr)))
(define (groupstr-make-add-mapper g) (lambda (el) (groupstr-add-mapper el g)))

(: get-groupstr-key (-> Groupstr String))
(define (get-groupstr-key g)
  (car g))

(: make-groupstr-key-search (-> String (-> String Boolean)))
(define (make-groupstr-key-search s)
  (lambda (x) (string=? s x)))

(: grouper-to-groupstr (-> Grouper Groupstr))
(define (grouper-to-groupstr g)
  (cons (car g) (list (cdr g))))

(: groupstr-reducer (-> Grouper (Listof Groupstr) (Listof Groupstr)))
(define (groupstr-reducer el acc)
  (let ([all-keys (map get-groupstr-key acc)])
    (if (false? (findf (make-groupstr-key-search (car el)) all-keys))
        (append acc (list (grouper-to-groupstr el)))
        (map (groupstr-make-add-mapper el) acc))))

(: group-words (-> (Listof String) (Listof (Listof String))))
(define (group-words ls)
  (foldl groupstr-reducer (list) (map words-to-groups-mapper ls)))

(displayln (group-words (list "eat" "tea" "tan" "ate" "nat" "bat")))