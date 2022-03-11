const funcs = {
		isNegative: (num) => {
			if (num < 0) {
				return true;
			}
			
			return false;
		},
		isPrime: (num) => {
			if (num < 1) {
				return false;
			}
			
			for (let i = 2; i < num; i++) {
				if (num % i == 0) {
					return false;
				}
			}
			
			return true;
		},
		isEven: (num) => {
			if (num % 2 == 0) {
				return true;
			}
			else {
				return false;
			}
		},
}

test('Returns true if arg is a negative number', () => {
	expect(funcs.isNegative(-1)).toBe(true);
});

test('Returns true if arg is a prime number', () => {
	expect(funcs.isPrime(3)).toBe(true);
});

test('Returns true if arg is an even number', () => {
	expect(funcs.isEven(2)).toBe(true);
});