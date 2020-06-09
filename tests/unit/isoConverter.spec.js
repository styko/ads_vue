import { DateTime } from 'luxon';
import isoConverter from '@/services/isoConverter';

describe('isoConverter', () => {
  it('should adapt object by changing iso string to moments', () => {
    const dateAsIsoString = '2020-05-21T10:46:49.375803Z';
    const expectedMoment = DateTime.fromISO(dateAsIsoString);

    const objectToAdapt = {};
    objectToAdapt.nestedObject1 = {
      isoAsNull: null,
      isoAsString1Time: dateAsIsoString,
      isoAsString2: dateAsIsoString,
    };
    objectToAdapt.nestedObject2 = {
      isoAsString1From: dateAsIsoString,
      nestedObjectOfNestedObject2: {
        isoAsString2To: dateAsIsoString,
      },
    };

    isoConverter.adaptIsoStrings(objectToAdapt);
    expect(objectToAdapt.nestedObject1.isoAsString1Time).toEqual(expectedMoment);
    expect(objectToAdapt.nestedObject1.isoAsString2).toEqual(expectedMoment);
    expect(objectToAdapt.nestedObject2.isoAsString1From).toEqual(expectedMoment);
    expect(objectToAdapt.nestedObject2.nestedObjectOfNestedObject2.isoAsString2To).toEqual(
      expectedMoment,
    );
  });
});
