import { DateTime } from 'luxon';

const keywords = ['Time', 'From', 'To'];

export default {
  adaptIsoStrings(input) {
    const adaptRecursive = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (obj[key] !== null && typeof obj[key] === 'object') {
          adaptRecursive(obj[key]);
        } else if (keywords.some((keyword) => key.includes(keyword))
          || /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.?\d*Z/.test(obj[key])) {
          // eslint-disable-next-line no-param-reassign
          obj[key] = DateTime.fromISO(obj[key]);
        }
      });
    };
    adaptRecursive(input);
  },
};
