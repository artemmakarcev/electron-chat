import { Timestamp } from '../db/firestore';
import { DateTime } from 'luxon';

export const createTimestamp = () => Timestamp.now().toMillis().toString();

/* export const formatTimeAgo = timestamp => {
  const now = DateTime.now();
  const past = DateTime.fromMillis(parseInt(timestamp, 10));
  // const diff = now.diff(past, ['years', 'months', 'days', 'hours', 'minutes']);
  const diff = now.diff(past, 'hours');
  return `${Math.floor(diff.hours)} hours ago`;
}; */

const units = [
  'year',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
];

export const formatTimeAgo = (timestamp) => {
  let dateTime = DateTime.fromMillis(parseInt(timestamp, 10));
  const diff = dateTime.diffNow().shiftTo(...units);
  const unit = units.find((unit) => diff.get(unit) !== 0) || 'second';

  const relativeFormatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
};