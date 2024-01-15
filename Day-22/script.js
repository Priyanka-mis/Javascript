var container = document.getElementById('numberContainer');
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


for (let i = 0; i <= 100; i++) {
        var numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i;
		
		if (isPrime(i)) {
			numberDiv.style.backgroundColor = 'red';
		}
		else if (i % 2 === 0) {
			numberDiv.style.backgroundColor = 'green';
		} 
		else {
			numberDiv.style.backgroundColor = 'yellow';
		}
		
		container.appendChild(numberDiv);
	}
  