import {RepeatType} from './repeatType';

export interface EmailSchedule {
  sendNow: boolean;

  sendDateTime: Date;
  endDate: Date;
  repeatAt: RepeatType;

  daysOfWeek: number[];
  dayOfMonth: number;
  dayOfWeek: number;
  numberOfWeek: number;
  month: number;
}
