var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var START_YEAR = 2024, START_MONTH = 8, START_DAY = 26; //2024.9.9 星期一 开学
var START_WEEK = 3;
var FINISH_WEEK = 16;
var LESSON_LIST = [
    {
        lessonName: "大学英语-1",
        lessonWeek: 1,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [3, 4],
        lessonSingleWeek: 0,
        lessonTeacher: "舒丽苹",
        lessonClassRoom: "东502",
    },
    {
        lessonName: "大学英语-1",
        lessonWeek: 1,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [5, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "舒丽苹",
        lessonClassRoom: "A305",
    },
    {
        lessonName: "中国古代文学-1",
        lessonWeek: 1,
        lessonDayTimeRange: [7, 8],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "冉昊月",
        lessonClassRoom: "B413",
    },
    {
        lessonName: "中国古代文学-1",
        lessonWeek: 1,
        lessonDayTimeRange: [7, 8],
        lessonWeekTimeRange: [4, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "冉昊月",
        lessonClassRoom: "A222",
    },
    {
        lessonName: "形势与政策-1",
        lessonWeek: 1,
        lessonDayTimeRange: [9, 10],
        lessonWeekTimeRange: [9, 12],
        lessonSingleWeek: 0,
        lessonTeacher: "何湘怡",
        lessonClassRoom: "A219",
    },
    {
        lessonName: "古代汉语-1",
        lessonWeek: 2,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "刘宇",
        lessonClassRoom: "B410",
    },
    {
        lessonName: "古代汉语-1",
        lessonWeek: 2,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [4, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "刘宇",
        lessonClassRoom: "A115",
    },
    {
        lessonName: "汉语写作",
        lessonWeek: 2,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [9, 15],
        lessonSingleWeek: 1,
        lessonTeacher: "高强",
        lessonClassRoom: "C305",
    },
    {
        lessonName: "现代汉语-1",
        lessonWeek: 2,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [10, 16],
        lessonSingleWeek: 2,
        lessonTeacher: "刘云峰",
        lessonClassRoom: "B314(计科)",
    },
    {
        lessonName: "思想道德与法治",
        lessonWeek: 2,
        lessonDayTimeRange: [5, 6],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "张茜",
        lessonClassRoom: "A321(没空调)",
    },
    {
        lessonName: "思想道德与法治",
        lessonWeek: 2,
        lessonDayTimeRange: [5, 6],
        lessonWeekTimeRange: [5, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "张茜",
        lessonClassRoom: "C301",
    },
    {
        lessonName: "大学英语-1",
        lessonWeek: 3,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [5, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "舒丽苹",
        lessonClassRoom: "A305",
    },
    {
        lessonName: "大学英语-1",
        lessonWeek: 3,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [3, 4],
        lessonSingleWeek: 0,
        lessonTeacher: "舒丽苹",
        lessonClassRoom: "东502",
    },
    {
        lessonName: "中国古代文学-1",
        lessonWeek: 3,
        lessonDayTimeRange: [5, 6],
        lessonWeekTimeRange: [3, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "冉昊月",
        lessonClassRoom: "Z405",
    },
    {
        lessonName: "古代汉语-1",
        lessonWeek: 4,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "刘宇",
        lessonClassRoom: "B210(计科)",
    },
    {
        lessonName: "古代汉语-1",
        lessonWeek: 4,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [4, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "刘宇",
        lessonClassRoom: "A325",
    },
    {
        lessonName: "汉语写作",
        lessonWeek: 4,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "高强",
        lessonClassRoom: "D216",
    },
    {
        lessonName: "汉语写作",
        lessonWeek: 4,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [4, 16],
        lessonSingleWeek: 1,
        lessonTeacher: "高强",
        lessonClassRoom: "A122",
    },
    {
        lessonName: "中国现代文学",
        lessonWeek: 4,
        lessonDayTimeRange: [5, 6],
        lessonWeekTimeRange: [10, 16],
        lessonSingleWeek: 2,
        lessonTeacher: "王靖瑜",
        lessonClassRoom: "B109",
    },
    {
        lessonName: "现代汉语-1",
        lessonWeek: 5,
        lessonDayTimeRange: [1, 2],
        lessonWeekTimeRange: [3, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "刘云峰",
        lessonClassRoom: "Z207",
    },
    {
        lessonName: "中国现代文学",
        lessonWeek: 5,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "王靖瑜",
        lessonClassRoom: "B112(机械)",
    },
    {
        lessonName: "中国现代文学",
        lessonWeek: 5,
        lessonDayTimeRange: [3, 4],
        lessonWeekTimeRange: [4, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "王靖瑜",
        lessonClassRoom: "A321(没空调)",
    },
    {
        lessonName: "思想道德与法治",
        lessonWeek: 5,
        lessonDayTimeRange: [7, 8],
        lessonWeekTimeRange: [3, 3],
        lessonSingleWeek: 1,
        lessonTeacher: "张茜",
        lessonClassRoom: "C303",
    },
    {
        lessonName: "思想道德与法治",
        lessonWeek: 5,
        lessonDayTimeRange: [7, 8],
        lessonWeekTimeRange: [5, 16],
        lessonSingleWeek: 0,
        lessonTeacher: "张茜",
        lessonClassRoom: "A418",
    },
];
var MONTH_DAY_NUMBER = {
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
var DAY_TIME_ARRAY = {
    1: ["8:15", "9:00"],
    2: ["9:05", "9:50"],
    3: ["10:10", "10:55"],
    4: ["11:00", "11:45"],
    5: ["14:00", "14:45"],
    6: ["14:50", "15:35"],
    7: ["15:55", "16:40"],
    8: ["16:45", "17:30"],
    9: ["19:00", "19:45"],
    10: ["19:50", "20:35"],
    11: ["20:40", "21:25"],
};
function getAfterNDay(_a) {
    var year = _a.year, month = _a.month, day = _a.day, n = _a.n;
    var currentYear = year;
    var currentMonth = month;
    var currentDay = day + n;
    var maxMonthNum = MONTH_DAY_NUMBER[currentMonth];
    var maxLastMonthNum = MONTH_DAY_NUMBER[currentMonth - 1 < 1 ? 12 : currentMonth - 1];
    while (currentDay > maxMonthNum) {
        currentDay -= maxMonthNum;
        if (++currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        maxMonthNum = MONTH_DAY_NUMBER[currentMonth];
    }
    while (currentDay <= 0) {
        currentDay += maxLastMonthNum;
        if (--currentMonth <= 0) {
            currentMonth = 12;
            currentYear--;
        }
        maxMonthNum = maxLastMonthNum[currentMonth - 1 < 1 ? 12 : currentMonth - 1];
    }
    return { year: currentYear, month: currentMonth, day: currentDay };
}
function getWeekLesson() {
    var date = new Date();
    var weekLessons = [];
    var weekDay = date.getDay();
    for (var i = 1; i <= 5; i++) {
        var lesson = getLesson(getAfterNDay({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            n: i - weekDay,
        }));
        weekLessons.push.apply(weekLessons, lesson);
    }
    return weekLessons;
}
//是否为闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//计算第几周星期几   [第几周,星期几]
function calculateDay(year, month, day) {
    var startDay = 1;
    if (year > START_YEAR) {
        var days = 0;
        for (var i = START_MONTH; i < 12; i++) {
            days += MONTH_DAY_NUMBER[i];
        }
        for (var i = 1; i < month; i++) {
            days += MONTH_DAY_NUMBER[i];
        }
        startDay += days + day - START_DAY;
    }
    else {
        var days = 0;
        for (var i = START_MONTH; i < month; i++) {
            days += MONTH_DAY_NUMBER[i];
        }
        startDay += days + day - START_DAY;
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
    var todayLesson = LESSON_LIST.filter(function (v) {
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
    return todayLesson.map(function (v) {
        return __assign(__assign({}, v), { lessonTimeRange: [
                DAY_TIME_ARRAY[v.lessonDayTimeRange[0]][0],
                DAY_TIME_ARRAY[v.lessonDayTimeRange[1]][1],
            ] });
    });
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
