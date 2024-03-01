import std/sequtils

func intersecRepl(seq1: seq[int8], seq2: seq[int8]): seq[int8] =
  let seqIntersec = filter(seq1, proc(x: int8): bool = any(seq2, proc(y: int8): bool = (x == y)))
  let seqUniq = foldl(seqIntersec)
  let repeats = map(seqUniq)

proc run() = 
  let seq1 = @[1, 2, 3, 2, 2, 0]
  let seq2 = @[5, 1, 2, 7, 3, 2]