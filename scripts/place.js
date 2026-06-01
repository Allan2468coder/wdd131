document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperatureC = 2;
const windSpeedKmh = 14;
const windChillElement = document.getElementById("windChill");

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const canCalculateChill = windSpeedKmh > 4.8 && temperatureC <= 10;
windChillElement.textContent = canCalculateChill ? `${Math.round(calculateWindChill(temperatureC, windSpeedKmh))} °C` : "N/A";
