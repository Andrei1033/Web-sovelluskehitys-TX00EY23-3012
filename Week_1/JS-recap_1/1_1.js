const celsiusInput = prompt("Enter a temperature in Celsius:");

const resultFahrenheit = (celsiusInput * 9 / 5) + 32;
const resultKelvin = parseFloat(celsiusInput) + 273.15;

alert(`${celsiusInput}°C is equal to ${resultFahrenheit.toFixed(2)}°F and ${resultKelvin.toFixed(2)}K.`);
document.getElementById("result").textContent = `${celsiusInput}°C is equal to ${resultFahrenheit.toFixed(2)}°F and ${resultKelvin.toFixed(2)}K.`;
