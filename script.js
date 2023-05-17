const getCountButton = document.querySelector('#getCount');
    const responseDiv = document.querySelector('#response');

    getCountButton.addEventListener('click', () => {
        const startTime = document.querySelector('#startTime').value;
        const endTime = document.querySelector('#endTime').value;
        const apiUrl = `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${startTime}&endtime=${endTime}`;

        fetch(apiUrl)
            .then(response => response.text())
            .then(data => {
                responseDiv.textContent = `Number of earthquakes between ${startTime} and ${endTime}: ${data}`;
            });
    });
