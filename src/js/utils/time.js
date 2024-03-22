import { Timestamp } from '../db/firestore';
import { DateTime } from 'luxon';

export const createTimestamp = () => Timestamp.now().toMillis().toString();

export const formatTimeAgo = timestamp => {
  const date1 = DateTime.now();
  const date2 = DateTime.fromMillis(parseInt(timestamp, 10));
  const diff = date1.diff(date2, ['years', 'months', 'days', 'hours', 'minutes']);
  // console.log(diff.toObject());
  return 'ago ...';
};
