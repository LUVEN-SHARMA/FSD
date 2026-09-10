const elements = {
	hours: document.querySelector('#hours'),
	minutes: document.querySelector('#minutes'),
	seconds: document.querySelector('#seconds'),
	weekday: document.querySelector('#weekday'),
	day: document.querySelector('#day'),
	month: document.querySelector('#month'),
	year: document.querySelector('#year'),
	dayLabel: document.querySelector('#dayLabel'),
	monthLabel: document.querySelector('#monthLabel'),
	yearLabel: document.querySelector('#yearLabel'),
	timezone: document.querySelector('#timezone'),
	worldClocks: [
		{ time: document.querySelector('#londonTime'), date: document.querySelector('#londonDate'), zone: 'Europe/London' },
		{ time: document.querySelector('#newYorkTime'), date: document.querySelector('#newYorkDate'), zone: 'America/New_York' },
		{ time: document.querySelector('#tokyoTime'), date: document.querySelector('#tokyoDate'), zone: 'Asia/Tokyo' }
	]
};

const pad = (value) => String(value).padStart(2, '0');
const formatter = new Intl.DateTimeFormat(undefined, {
	weekday: 'long',
	month: 'long',
	timeZoneName: 'short'
});

function updateClock() {
	const now = new Date();
	const weekday = new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(now);
	const month = new Intl.DateTimeFormat(undefined, { month: 'long' }).format(now);
	const timeZone = formatter.formatToParts(now).find((part) => part.type === 'timeZoneName')?.value || '';

	elements.hours.textContent = pad(now.getHours());
	elements.minutes.textContent = pad(now.getMinutes());
	elements.seconds.textContent = pad(now.getSeconds());
	elements.weekday.textContent = weekday;
	elements.day.textContent = pad(now.getDate());
	elements.month.textContent = month;
	elements.year.textContent = now.getFullYear();
	elements.dayLabel.textContent = pad(now.getDate());
	elements.monthLabel.textContent = month;
	elements.yearLabel.textContent = now.getFullYear();
	elements.timezone.textContent = `${Intl.DateTimeFormat().resolvedOptions().timeZone} · ${timeZone}`;

	elements.worldClocks.forEach((clock) => {
		clock.time.textContent = new Intl.DateTimeFormat(undefined, {
			hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZone: clock.zone
		}).format(now);
		clock.date.textContent = new Intl.DateTimeFormat(undefined, {
			weekday: 'long', day: '2-digit', month: 'long', timeZone: clock.zone
		}).format(now);
	});
}

updateClock();
setInterval(updateClock, 1000);
