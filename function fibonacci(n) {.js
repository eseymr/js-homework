function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(2)); // Should print 1
console.log(fibonacci(5)); // Should print 5
console.log(fibonacci(7)); // Should print 13
