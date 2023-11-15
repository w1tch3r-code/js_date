"use strict";

// ===================================================
//      	 		JS-Vertiefung – Date
// ===================================================

// ===================================================
//       JS-Vertiefung – date_new-date()-Level_1_1
// ===================================================

console.log("%c JS-Vertiefung – date_new-date()-Level_1_1", "color: tomato");

// Aufgabenstellung:

// In dieser Übung werden wir Date() lernen.
// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

const output = document.querySelector("#output");
output.innerHTML = `${date1}<br>`;
output.innerHTML += `${date2}<br>`;
output.innerHTML += `${date3}<br>`;
output.innerHTML += `${date4}<br>`;

// ===================================================
//      JS-Vertiefung – date_Level_1_3
// ===================================================

console.log("%c JS-Vertiefung – date_Level_1_3", "color: tomato");

const datum = new Date();

const output2 = document.querySelector("#output2");

datum.setFullYear(2222);
datum.setDate(23);
datum.setMonth(9);
output2.innerHTML = `${datum}<br>`;

datum.setFullYear(2123);
datum.setDate(24);
datum.setMonth(1);
output2.innerHTML += `${datum}<br>`;

datum.setMonth(2);
output2.innerHTML += `${datum}<br>`;

datum.setDate(3);
output2.innerHTML += `${datum}<br>`;

const today = new Date();
let datum2 = new Date(new Date().setDate(today.getDate() + 30));
output2.innerHTML += `${datum2}<br>`;

// ===================================================
//      JS-Vertiefung – date_Level_1_5
// ===================================================

console.log("%c JS-Vertiefung – date_Level_1_5", "color: tomato");

// Aufgabenstellung:

// Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// Verwende den Code aus dem Kommentar.
// Nutze getMonth() um die Aufgabe zu lösen.
// Überprüfe deine Funktion mit folgenden Argumenten für deine Parameter in der Konsole:
// console.log(monatsName("2001,3,4")); //März
// console.log(monatsName("2019,12,24")); //Dezember
// console.log(monatsName("1410,07,15")); //Juli

const monatsName = (dateString) => {
	// dateString wird von newDate() in ein richtiges Datum umgewandelt
	const date = new Date(dateString);
	let list = [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember",
	];
	// Monat als Index
	const monthIndex = date.getMonth();
	// Monatsname wird aus dem Array über den Index zurück gegeben
	return list[monthIndex];
};

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

// ===================================================
//      	JS-Vertiefung – date_Level_1_6
// ===================================================

console.log("%c JS-Vertiefung – date_Level_1_6", "color: tomato");

// Aufgabenstellung

// Schreibe eine Funktion, um AM und PM zu erhalten. Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt. Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
// Die Funktion enthält:
// Ein Parameter
// Ternary Operator oder if
// getHours()
// Überprüfe deine Funktion in der Konsole.
// Teste sie mit folgenden Argumenten:
// date1 = new Date(1999, 10, 5, 15) // PM
// date2 = new Date()
// date3 = new Date(2019, 12, 3, 12) // PM
// date4 = new Date(2000, 1, 1, 11) // AM

const date5 = new Date(1999, 10, 5, 15); // PM
const date6 = new Date(); // Aktuelles Datum und Uhrzeit
const date7 = new Date(2019, 12, 3, 12); // PM
const date8 = new Date(2000, 1, 1, 11); // AM

const getAMPM = (date) => {
	const period = date.getHours() < 12 ? "AM" : "PM";
	return period;
};

console.log(getAMPM(date5));
console.log(getAMPM(date6));
console.log(getAMPM(date7));
console.log(getAMPM(date8));


// ===================================================
//      	JS-Vertiefung – date_Level_1_7
// ===================================================

console.log("%c JS-Vertiefung – date_Level_1_7", "color: tomato");

// Aufgabenstellung

// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
// Nutze:
// Conditionals Statement
// Comparison Operators
// Funktion mit einem Parameter
// Aktuelles Datum
// getDay()
// return "Weekend"
// return "Arbeitstag"
// Teste folgende Daten: 12.15.2019, 2.16.2001, 2.1.2020, 2.29.2020.


const istWeekend = (dateString) => {
	const date = new Date(dateString);
	const day = date.getDay();

	if (day === 0 || day === 6) {
		return 'Weekend';
	} else {
		return 'Arbeitstag';
	}
}

console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));

// ===================================================
//      	JS-Vertiefung – date_Level_1_10
// ===================================================

console.log("%c JS-Vertiefung – date_Level_1_10", "color: tomato");

// Aufgabenstellung:

// Schreibe eine Funktion, die das aktuelle Datum anzeigt.
// Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
// Nutze Befehle:
// getDate(), getMonth(), getFullYear()
// getElementById() oder querySelector()
// Lass Dir das Ergebnis im HTML-Dokument anzeigen.


const output3 = document.querySelector("#output3");

const dateOutput = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	output3.innerHTML = `${day}/${month}/${year}`;
};

dateOutput();