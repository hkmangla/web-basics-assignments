// console.log("Hello World\n");
const mod = 1000000007;

function pow (a,b) {
  if(b === 0) {
    return 1;
  }
  let tmp = pow(a, Math.floor(b/2));
  tmp = (tmp * tmp) % mod;
  if(b%2) {
    return (tmp * a) % mod;
  }
  else {
    return tmp;
  }
}

console.log(10%3);
console.log(pow(3,7));
