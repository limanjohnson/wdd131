// Get date and last modified time for footer section

const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

// alert(document.lastModified);
//returns: day, month day, year time

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;

// Get wind chill

const temperature = 18
const windSpeed = 21

const calculateWindChill = (temperature, windSpeed) => {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    }
    return "N/A"    
};

const windChillResult = calculateWindChill(temperature, windSpeed);

if (windChillResult !== "N/A") {
    document.getElementById("windChill").innerHTML = `${calculateWindChill(temperature, windSpeed)}&#8451;`;
} else {
    document.getElementById("windChill").innerHTML = calculateWindChill(temperature,windSpeed);
}
