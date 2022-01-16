const prime = 1;

function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('no');
      return false;
    }
  }

  if (n === 1) {
    console.log('no');
    return true;
  }
  console.log('yes');
}

primeFunc(prime);
