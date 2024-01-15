 // Change the year color every 1 second
      function changeYearColor() {
        const yearElement = document.getElementById('year');
        setInterval(() => {
          yearElement.style.color = getRandomColor();
        }, 1000);
      }
		
		function displayCurrentDateTime() {
        const currentDateTimeElement = document.getElementById('currentDateTime');

        function updateDateTime() {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const month = currentDate.toLocaleString('default', { month: 'long' });
          const day = currentDate.getDate();
          const hours = currentDate.getHours();
          const minutes = currentDate.getMinutes();
          const seconds = currentDate.getSeconds();

          currentDateTimeElement.innerHTML = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
          currentDateTimeElement.style.backgroundColor = getRandomColor();
		  currentDateTimeElement.style.textAlign='center'
		  currentDateTimeElement.style.marginLeft='550px'
		  currentDateTimeElement.style.marginRight='30'
		  currentDateTimeElement.style.width='300px'
		  

          // Set a timeout to update after 1000 milliseconds (1 second)
          setTimeout(updateDateTime, 1000);
        }

        updateDateTime();
      }

      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Call function to display current date and time
      displayCurrentDateTime();
	  
      changeYearColor();
	  