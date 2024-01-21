function updateDateTime() {
    const date = new Date();
    const timeElement = document.getElementById("times");

    // Format the date as a string in Bahasa Indonesia without timezone
    const options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    let formattedTime = date.toLocaleString('id-ID', options);

    // Remove the word "pukul" from the formatted time string
    formattedTime = formattedTime.replace('pukul', '');

    // Replace slashes with dashes
    formattedTime = formattedTime.replace(/\//g, '-');

    // Set the formatted time as text content
    timeElement.textContent = formattedTime;
  }

  // Update the time every second
  setInterval(updateDateTime, 1000);

  // Initial update
  updateDateTime();