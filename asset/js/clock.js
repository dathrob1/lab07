var hourHand = document.getElementById('hour_hand');
var minuteHand = document.getElementById('minute_hand');
var secondHand = document.getElementById('second_hand');

function initClock() {
	var date = new Date();
	var hour = date.getHours() % 12; // 0 - 23
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60
	var minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 deg. 6 / 60
	var secondDeg = second * 6; // 360 / 60

	hour_hand.style.transform = 'rotate(' + hourDeg + 'deg)';
	minute_hand.style.transform = 'rotate(' + minuteDeg + 'deg)';
	second_hand.style.transform = 'rotate(' + secondDeg + 'deg)';

	setTimeout(initClock, 1000);
};

initClock();
