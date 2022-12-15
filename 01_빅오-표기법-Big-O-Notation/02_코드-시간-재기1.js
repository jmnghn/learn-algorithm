// solution #1
function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// 10억, Time Elapsed: 1.0042999999970197 seconds.
