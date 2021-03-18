document.addEventListener("DOMContentLoaded", () => {

    var date = new Date();
    var month;
    var year;
    //var day = date.getDate();
    var dayOfMonth = [];
    var calendar = [];
    var minDate = [];

    minDate = setMinDate('days', 1078);
    //daysLeftInYear();

    if(minDate.length > 0) {
        year = minDate[0];
        month = minDate[1];
        day = minDate[2];
    } else {
        month = date.getMonth();
        year = date.getFullYear();
        day = 0;
    }

    calendar = createCalendar(year, month, day);

    document.querySelector('#prev').addEventListener('click', () => {

        for (var i = 0; i < calendar.length; i++) {
            calendar[i].remove();
        }

        calendar = [];

        if (month == 0) {
            month = 11;
            year = year - 1;
        } else {
            month = month - 1;
        }

        calendar = createCalendar(year, month);

    });

    document.querySelector('#next').addEventListener('click', () => {

        for (var i = 0; i < calendar.length; i++) {
            calendar[i].remove();
        }

        calendar = [];

        if (month == 11) {
            month = 0;
            year = year + 1;
        } else {
            month = month + 1;
        }

        calendar = createCalendar(year, month);

    });



});

function isLeapYear(y) 
{
    var leapYear = 0;

    if (y % 400 == 0) {
        leapYear = 1;
    }
    else if (y % 100 == 0 && y % 4 == 0) {
        leapYear = 0;
    }
    else if (y % 4 == 0 && y % 100 != 0) {
        leapYear = 1;
    }
    else {
        leapYear = 0;
    }

    return leapYear;
}

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

    var leapYear = isLeapYear(y);

    if (leapYear == 1 && m < 2) {
        lpc = 1;
    } else {
        lpc = 0;
    }
    //console.log('lpc ' + lpc);

    result = (yc + mc + cc + dc - lpc) % 7;

    return result;
}

function createCalendar(year, month, day = 0) {

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

    days = numberOfDays(month, year);
    monthVal = month;
    firstDay = findTheFirst(year, month);
    lastMonth = month - 1;
    prevDays = numberOfDays(lastMonth, year);
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

    if(day > 0) {
        for (var k = firstDay; k < days + firstDay; k++) {
            dayOfMonth[k].value = year + '-' + (monthVal + 1) + '-' + d;
            dayOfMonth[k].innerHTML = dayStart;
            if(dayStart < day) {
                dayOfMonth[k].disabled = true;
            }
            dayStart++;
            d++;
        }
    } else {
        for (var k = firstDay; k < days + firstDay; k++) {
            dayOfMonth[k].value = year + '-' + (monthVal + 1) + '-' + d;
            dayOfMonth[k].innerHTML = dayStart;
            dayStart++;
            d++;
        }
    }

    // for (var k = firstDay; k < days + firstDay; k++) {
    //     dayOfMonth[k].value = year + '-' + (monthVal + 1) + '-' + d;
    //     dayOfMonth[k].innerHTML = dayStart;
    //     dayStart++;
    //     d++;
    // }
    // console.log('Cougar ' + d);

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
            document.querySelector('.show_date').value = i.value;
        });
    })

    document.querySelector('.current').innerHTML = months[month] + ' ' + year;

    return dayOfMonth;

}

function numberOfDays(month, year = 0) {
    var days; 
    var date = new Date();
    var year;
    var y;
    var leapYear = 0;

    if(year == 0) {
        y = date.getFullYear();
    } else {
        y = year;
    }

    leapYear = isLeapYear(y);

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        days = 31;
    }
    else if (month == 1 && leapYear == 0) {
        days = 28;
    }
    else if (month == 1 && leapYear == 1) {
        days = 29;
    }
    else {
        days = 30;
    }

    return days;
}

function setMinDate(type, when) {
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDate();
    var nextMonth;
    var nextYear = year + 1;
    var currentNumDays = numberOfDays(month);
    var nextNumDays;
    var daysLeft = currentNumDays - day;
    var restOfYear = daysLeftInYear();
    var yearCounter = 0;
    var minYear = 0;
    var minMonth = 0;
    var minDay = 0;
    var allYear = 365;
    var allNextYear = 365;
    var minDate = [];

    if(month + 1 < 12) {
        nextMonth = month + 1;
    } else {
        nextMonth = 1;
        year + 1;
    }

    nextNumDays = numberOfDays(nextMonth);

    if(type == 'weeks') {
        when = when * 7;
    }

    if(isLeapYear(nextYear) == 1) {
        allNextYear = 366;
    } else {
        allNextYear = 365;
    }

    console.log('zero_when ' + when);
   
    if(when > restOfYear && when < (restOfYear + allNextYear)) {
        console.log('komodo dragon');
        when -= restOfYear;
        yearCounter++;
        month = 0;
        days = numberOfDays(month);

        while(when > days) {
            if(month == 12) {
                month = 0;
            }

            when -= days;
            month++;
            days = numberOfDays(month);
        }

        minYear = year + yearCounter;
        minMonth = month;
        minDay = when;

    }
    else if(when > restOfYear && when > (restOfYear + allNextYear)) {
        console.log('wolf');
        when -= restOfYear;
        yearCounter++;

        if(isLeapYear(year + yearCounter)) {
            allYear = 366
        } else {
            allYear = 365;
        }

        while(when > allYear) {
        
            if(isLeapYear(year + yearCounter)) {
                allYear = 366
            } else {
                allYear = 365;
            }

            when -= allYear;
            yearCounter++;
        }

        month = 0;
        days = numberOfDays(month, (year + yearCounter));

        if(when > days) {
            while(when > days) {
                if(month == 11) {
                    month = 0;
                }

                when -= days;
                month++;
                days = numberOfDays(month, year + yearCounter);
            }

        } else {
            when -= days;
        }
        minYear = year + yearCounter;
        minMonth = month;
        minDay = when;

    }
    else if(when > daysLeft && when < (daysLeft + nextNumDays)) {
        console.log('raven');
        when -= daysLeft;
        month++;

        minYear = year;
        minMonth = month;
        minDay = when;
    }
    else {
        console.log('tiger');
        when += day;

        minYear = year;
        minMonth = month;
        minDay = when;
    }

    console.log('month: ' + minMonth);
    console.log('day: ' + minDay);
    console.log('year ' + minYear);

    minDate.push(minYear);
    minDate.push(minMonth);
    minDate.push(minDay);

    return minDate;

    
}

function daysLeftInYear() {
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDate();
    var leapYear = isLeapYear(year);
    var days = 0;

    if(leapYear == 1) {
        allDays = 366;
    } else {
        allDays = 365;
    }

    for(i = 0; i < month; i++) {
        days += numberOfDays(i);
    }

    days += day;

    days = allDays - days;

    return days;
}

function getMinDateWYear() {

}