var StartYear = 2024, StartMonth = 8, StartDay = 26; //2024.9.9 星期一 开学
var lessonList = [];
var MonthDayNumber = {
    1: 31,
    2: (function () {
        var date = new Date();
        return isLeapYear(date.getFullYear()) ? 29 : 28;
    })(),
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
};
//是否为闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//计算第几周星期几   [第几周,星期几]
function calculateDay(year, month, day) {
    var startDay = 1;
    if (year > StartYear) {
        var days = 0;
        for (var i = StartMonth; i < 12; i++) {
            days += MonthDayNumber[i];
        }
        for (var i = 1; i < month; i++) {
            days += MonthDayNumber[i];
        }
        startDay += days + day - StartDay;
    }
    else {
        var days = 0;
        for (var i = StartMonth; i < month; i++) {
            days += MonthDayNumber[i];
        }
        startDay += days + day - StartDay;
    }
    return {
        currentWeek: Math.ceil(startDay / 7),
        currentDay: startDay % 7 === 0 ? 7 : startDay % 7,
    };
}
//通过 年月日 得对应课程
function getLesson(_a) {
    var year = _a.year, month = _a.month, day = _a.day;
    var _b = calculateDay(year, month, day), currentDay = _b.currentDay, currentWeek = _b.currentWeek;
    var todayLesson = lessonList.filter(function (v) {
        if (currentDay === v.lessonWeek) {
            if (currentWeek >= v.lessonWeekTimeRange[0] &&
                currentWeek <= v.lessonWeekTimeRange[1]) {
                if (v.lessonSingleWeek == 0)
                    return true;
                if (v.lessonSingleWeek == currentWeek % 2) {
                    return true;
                }
            }
        }
        return false;
    });
    return todayLesson;
}
//今日课表
function getTodayLesson() {
    var date = new Date();
    return getLesson({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
    });
}
function start() {
    fetch("./lesson.json")
        .then(function (data) {
        return data.json();
    })
        .then(function (data) {
        return data;
    })
        .then(function (data) {
        console.log(data, "data");
        lessonList = data;
        var todayLesson = getTodayLesson();
        console.log(todayLesson, "todayLesson");
    });
}
start();
