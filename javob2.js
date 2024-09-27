
function returnDayOfWeek(dayNumber) {
    const days = [
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
      "Yakshanba"
    ];

    if(dayNumber <= 0 || dayNumber > days.length) {
      console.log("none");
    }

    console.log(days[dayNumber - 1]);

    
}


returnDayOfWeek(1);