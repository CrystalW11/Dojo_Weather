/** @format */

function disappearbutton(element) {
  element.remove();
}

function convertTemperature() {
  const selector = document.getElementById("mySelector");
  let isFahrenheit = selector.value === "°F";

  // Define an array of temperatures for each day in Celsius
  const dailyTemps = {
    today: { high: 24, low: 18 }, // Example: Today
    tomorrow: { high: 27, low: 19 }, // Example: Tomorrow
    friday: { high: 21, low: 16 }, // Example: Friday
    saturday: { high: 26, low: 21 }, // Example: Saturday
  };

  // Convert and display temperatures for each day
  for (const day in dailyTemps) {
    const highTempElement = document.querySelector(`.${day} .red-temp`);
    const lowTempElement = document.querySelector(`.${day} .blue-temp`);

    if (isFahrenheit) {
      // Convert high and low temperatures to Fahrenheit
      const highF = (dailyTemps[day].high * 9) / 5 + 32;
      const lowF = (dailyTemps[day].low * 9) / 5 + 32;
      highTempElement.textContent = highF.toFixed(1) + "°F";
      lowTempElement.textContent = lowF.toFixed(1) + "°F";
    } else {
      // Display temperatures in Celsius
      highTempElement.textContent = dailyTemps[day].high + "°C";
      lowTempElement.textContent = dailyTemps[day].low + "°C";
    }
  }
}

// Add event listener to the select element to call convertTemperature on change
document
  .getElementById("mySelector")
  .addEventListener("change", convertTemperature);
