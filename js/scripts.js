document.addEventListener("DOMContentLoaded", () => {

    var date = new Date();
    var month = date.getMonth();
    //var month = 4;
    var year = date.getFullYear();
    var day = date.getUTCDate();
    var dayOfMonth = [];
    var calendar;
    // var days;
    // var lastMonth;
    // var prevDays;
    // var firstDay;
    // var prevDaysFill;
    // var dayStart = 1;

    // days = numberOfDays(month);
    // monthVal = month;
    // firstDay = findTheFirst(year, month);
    // lastMonth = month - 1;
    // prevDays = numberOfDays(lastMonth);
    // prevDaysFill = prevDays - (firstDay - 1);
    // prevDaysFill2 = prevDays - (firstDay - 1);
    // totalDays = days + firstDay;




    // for (var i = 0; i < 42; i++) {
    //     var btn = document.createElement("button");
    //     btn.className = 'btn' + i;
    //     dayOfMonth.push(btn);
    // }

    // for (var j = 0; j < firstDay; j++) {
    //     dayOfMonth[j].value = prevDaysFill * -1;
    //     dayOfMonth[j].disabled = true;
    //     dayOfMonth[j].innerHTML = prevDaysFill;
    //     prevDaysFill++;
    // }

    // var d = 1;

    // for (var k = firstDay; k < days + firstDay; k++) {
    //     dayOfMonth[k].value = year + '-' + (monthVal + 1) + '-' + d;
    //     dayOfMonth[k].innerHTML = dayStart;
    //     dayStart++;
    //     d++;
    // }
    // console.log('Cougar ' + d);

    // var fDays = 1;

    // for (var h = days + firstDay; h < 42; h++) {
    //     dayOfMonth[h].value = -1;
    //     dayOfMonth[h].disabled = true;
    //     dayOfMonth[h].innerHTML = fDays;
    //     fDays++;
    // }

    //console.log('dayArray ' + dayOfMonth.length);

    //console.log('day ' + day);

    // createCalendar(month, year, totalDays, dayOfMonth);
    calendar = createCalendarYeah(month, year)

    document.querySelector('#prev').addEventListener('click', () => {
    //     dayStart = 1;
    //     prevDaysFill = 0;
    //     totalDays = 0;
    //     prevDays = 0;
    //     days = 0;
    //     firstDay = 0;
    //     lastMonth = 0;
    //     fDays = 1;

        for (var i = 0; i < calendar.length; i++) {
            calendar[i].remove();
        }

        calendar = [];

    //     dayOfMonth = [];

    //     if (month == 0) {
    //         month = 11;
    //         year = year - 1;
    //     } else {
    //         month = month - 1;
    //     }

    //     lastMonth = month - 1;

    //     if (lastMonth == 0) {
    //         lastMonth = 11;
    //     } else {
    //         lastMonth = lastMonth - 0;
    //     }

    //     days = numberOfDays(month);
    //     firstDay = findTheFirst(year, month);
    //     prevDays = numberOfDays(lastMonth);
    //     prevDaysFill = prevDays - (firstDay - 1);
    //     totalDays = days + firstDay;

    //     for (var i = 0; i < 42; i++) {
    //         var btn = document.createElement("button");
    //         btn.className = 'btn' + i;
    //         dayOfMonth.push(btn);
    //     }
    
    //     for (var j = 0; j < firstDay; j++) {
    //         dayOfMonth[j].value = prevDaysFill * -1;
    //         dayOfMonth[j].disabled = true;
    //         dayOfMonth[j].innerHTML = prevDaysFill;
    //         prevDaysFill++;
    //     }

    //     d = 1;
    
    //     for (var k = firstDay; k < days + firstDay; k++) {
    //         dayOfMonth[k].value = year + '-' + (month + 1) + '-' + d;
    //         dayOfMonth[k].innerHTML = dayStart;
    //         dayStart++;
    //         d++;
    //     }

    //     for (var h = days + firstDay; h < 42; h++) {
    //     dayOfMonth[h].value = -1;
    //     dayOfMonth[h].disabled = true;
    //     dayOfMonth[h].innerHTML = fDays;
    //     fDays++;
    // }

        // createCalendar(month, year, totalDays, dayOfMonth);

        changeMonth(month, year, 'back', calendar);

    });

    document.querySelector('#next').addEventListener('click', () => {
    //     dayStart = 1;
    //     prevDaysFill = 0;
    //     totalDays = 0;
    //     prevDays = 0;
    //     days = 0;
    //     firstDay = 0;
    //     lastMonth = 0;
    //     fDays = 1;

        for (var i = 0; i < calendar.length; i++) {
            calendar[i].remove();
        }

        calendar = [];

    //     dayOfMonth = [];

    //     if (month == 11) {
    //         month = 0;
    //         year = year + 1;
    //     } else {
    //         month = month + 1;
    //     }

    //     lastMonth = month - 1;

    //     if (lastMonth == 0) {
    //         lastMonth = 11;
    //     } else {
    //         lastMonth = lastMonth - 0;
    //     }
    //     console.log('lastMonth ' + lastMonth);

    //     days = numberOfDays(month);

    //     firstDay = findTheFirst(year, month);
    //     prevDays = numberOfDays(lastMonth);
    //     prevDaysFill = prevDays - (firstDay - 1);
    //     totalDays = days + firstDay;

    //     for (var i = 0; i < 42; i++) {
    //         var btn = document.createElement("button");
    //         btn.className = 'btn' + i;
    //         dayOfMonth.push(btn);
    //     }
    
    //     for (var j = 0; j < firstDay; j++) {
    //         dayOfMonth[j].value = prevDaysFill * -1;
    //         dayOfMonth[j].disabled = true;
    //         dayOfMonth[j].innerHTML = prevDaysFill;
    //         prevDaysFill++;
    //     }

    //     d = 1;
    
    //     for (var k = firstDay; k < days + firstDay; k++) {
    //         dayOfMonth[k].value = year + '-' + (month + 1) + '-' + d;
    //         dayOfMonth[k].innerHTML = dayStart;
    //         dayStart++;
    //         d++;
    //     }

    //     for (var h = days + firstDay; h < 42; h++) {
    //     dayOfMonth[h].value = -1;
    //     dayOfMonth[h].disabled = true;
    //     dayOfMonth[h].innerHTML = fDays;
    //     fDays++;
    // }

    //     createCalendar(month, year, totalDays, dayOfMonth);

    changeMonth(month, year, 'forward', calendar);

    });



});

function findTheFirst(y, m) {
    var yc;
    var mc;
    var cc;
    var dc = 1;
    var lpc;
    var result;

    var thisY = y % 100;
    //console.log('thisY ' + thisY);

    yc = (((thisY / 4) - ((thisY % 4) / 4)) + thisY) % 7;
    //console.log('yc ' + yc);

    switch (m) {
        case 0:
            mc = 0;
            break;
        case 1:
            mc = 3;
            break;
        case 2:
            mc = 3;
            break;
        case 3:
            mc = 6;
            break;
        case 4:
            mc = 1;
            break;
        case 5:
            mc = 4;
            break;
        case 6:
            mc = 6;
            break;
        case 7:
            mc = 2;
            break;
        case 8:
            mc = 5;
            break;
        case 9:
            mc = 0;
            break;
        case 10:
            mc = 3;
            break;
        case 11:
            mc = 5;
            break;
    }
    //console.log('mc ' + mc);

    century = ((y - (y % 100)) / 4) % 100;
    //console.log('century ' + century);

    switch (century) {
        case 0:
            cc = 6;
            break;
        case 25:
            cc = 4;
            break;
        case 50:
            cc = 2;
            break;
        case 75:
            cc = 0;
            break;
    }
    //console.log('cc ' + cc);

    if (y % 100 == 0 && y % 4 == 0) {
        lpc = 0;
    }
    else if (y % 4 == 0 && y % 100 != 0) {
        if (m == 0 || m == 1) {
            lpc = 1;
        } else {
            lpc = 0;
        }
    }
    else if (y % 400 == 0) {
        if (m == 0 || m == 1) {
            lpc = 1;
        } else {
            lpc = 0;
        }
    }
    else {
        lpc = 0;
    }
    //console.log('lpc ' + lpc);

    result = (yc + mc + cc + dc - lpc) % 7;

    return result;
}

function createCalendar(month, year, days, dayOfMonth) {

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var firstOfMonth = findTheFirst(year, month);

    var cssGridProp = 'grid-area: 1/1/2/2;';

    switch(firstOfMonth) {
        case 0:
            cssGridProp = 'grid-area: 1/1/2/2;';
            break;
        case 1:
            cssGridProp = 'grid-area: 1/2/2/3;';
            break;
        case 2:
            cssGridProp = 'grid-area: 1/3/2/4;';
            break;
        case 3:
            cssGridProp = 'grid-area: 1/4/2/5;';
            break;
        case 4:
            cssGridProp = 'grid-area: 1/5/2/6;';
            break;
        case 5:
            cssGridProp = 'grid-area: 1/6/2/7;';
            break;
        case 6:
            cssGridProp = 'grid-area: 1/7/2/8;';
            break;
    }

    dayOfMonth[firstOfMonth].style.cssText = cssGridProp;


    for (var i = 0; i < dayOfMonth.length; i++) {
        document.querySelector('.date').appendChild(dayOfMonth[i]);
    }

    var buttons = document.querySelectorAll('button');

    buttons.forEach(i => {
        i.addEventListener('click', () => {
            console.log('panther ' + i.value);
            document.querySelector('.show_date').value = i.value;
        });
    })

    console.log('month ' + month);

    document.querySelector('.current').innerHTML = months[month] + ' ' + year;

}

function createCalendarYeah(month, year) {

    var dayOfMonth = [];
    var days;
    var lastMonth;
    var prevDays;
    var firstDay;
    var prevDaysFill;
    var dayStart = 1;

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var firstOfMonth = findTheFirst(year, month);

    var cssGridProp = 'grid-area: 1/1/2/2;';

    days = numberOfDays(month);
    monthVal = month;
    firstDay = findTheFirst(year, month);
    lastMonth = month - 1;
    prevDays = numberOfDays(lastMonth);
    prevDaysFill = prevDays - (firstDay - 1);
    prevDaysFill2 = prevDays - (firstDay - 1);
    totalDays = days + firstDay;




    for (var i = 0; i < 42; i++) {
        var btn = document.createElement("button");
        btn.className = 'btn' + i;
        dayOfMonth.push(btn);
    }

    for (var j = 0; j < firstDay; j++) {
        dayOfMonth[j].value = prevDaysFill * -1;
        dayOfMonth[j].disabled = true;
        dayOfMonth[j].innerHTML = prevDaysFill;
        prevDaysFill++;
    }

    var d = 1;

    for (var k = firstDay; k < days + firstDay; k++) {
        dayOfMonth[k].value = year + '-' + (monthVal + 1) + '-' + d;
        dayOfMonth[k].innerHTML = dayStart;
        dayStart++;
        d++;
    }
    console.log('Cougar ' + d);

    var fDays = 1;

    for (var h = days + firstDay; h < 42; h++) {
        dayOfMonth[h].value = -1;
        dayOfMonth[h].disabled = true;
        dayOfMonth[h].innerHTML = fDays;
        fDays++;
    }

    switch(firstOfMonth) {
        case 0:
            cssGridProp = 'grid-area: 1/1/2/2;';
            break;
        case 1:
            cssGridProp = 'grid-area: 1/2/2/3;';
            break;
        case 2:
            cssGridProp = 'grid-area: 1/3/2/4;';
            break;
        case 3:
            cssGridProp = 'grid-area: 1/4/2/5;';
            break;
        case 4:
            cssGridProp = 'grid-area: 1/5/2/6;';
            break;
        case 5:
            cssGridProp = 'grid-area: 1/6/2/7;';
            break;
        case 6:
            cssGridProp = 'grid-area: 1/7/2/8;';
            break;
    }

    dayOfMonth[firstOfMonth].style.cssText = cssGridProp;


    for (var i = 0; i < dayOfMonth.length; i++) {
        document.querySelector('.date').appendChild(dayOfMonth[i]);
    }

    var buttons = document.querySelectorAll('button');

    buttons.forEach(i => {
        i.addEventListener('click', () => {
            console.log('panther ' + i.value);
            document.querySelector('.show_date').value = i.value;
        });
    })

    console.log('month ' + month);

    document.querySelector('.current').innerHTML = months[month] + ' ' + year;

    return dayOfMonth;

}

function numberOfDays(month) {
    var days; 

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        days = 31;
    }
    else if (month == 1) {
        days = 28;
    }
    else {
        days = 30;
    }

    return days;
}

function changeMonth(month, year, direction, calendar) {

    for (var i = 0; i < calendar.length; i++) {
        calendar[i].remove();
    }

    if(direction == 'back') {

        if (month == 0) {
            month = 11;
            year = year - 1;
        } else {
            month = month - 1;
        }
    } else {
        if (month == 11) {
            month = 0;
            year = year + 1;
        } else {
            month = month + 1;
        }
    }

    createCalendarYeah(month, year);
}

function setMinDate() {

}