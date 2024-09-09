interface ILesson {
  lessonName: string;
  lessonWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  lessonDayTimeRange: Array<number>;
  lessonWeekTimeRange: Array<number>;
  lessonSingleWeek: 0 | 1 | 2;
  lessonTeacher: string;
  lessonClassRoom: string;
}

class Lesson {
  lessonName: string;
  lessonWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  lessonDayTimeRange: Array<number>;
  lessonWeekTimeRange: Array<number>;
  lessonSingleWeek: 0 | 1 | 2;
  lessonTeacher: string;
  lessonClassRoom: string;
  constructor({
    lessonName,
    lessonWeekTimeRange,
    lessonDayTimeRange,
    lessonWeek,
    lessonTeacher,
    lessonClassRoom,
    lessonSingleWeek,
  }: ILesson) {
    this.lessonName = lessonName;
    this.lessonWeek = lessonWeek;
    this.lessonDayTimeRange = lessonDayTimeRange; // 1-12
    this.lessonWeekTimeRange = lessonWeekTimeRange; //1-16
    this.lessonSingleWeek = lessonSingleWeek; //0-全部,1-单周,2-双周
    this.lessonTeacher = lessonTeacher;
    this.lessonClassRoom = lessonClassRoom;
  }
}
