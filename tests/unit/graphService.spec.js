import { DateTime } from 'luxon';
import graphService from '@/services/graphService';

describe('graphService', () => {
  it('should convert prices to graph data for hicharts ', () => {
    const prices = [{
      updated: DateTime.fromISO('2020-05-26T10:17:51.907709Z'),
      value: 331200,
    }];

    const convertPrices = graphService.convertPricesToGraphData(prices);
    expect(convertPrices[0][1]).toEqual(331200);
    expect(convertPrices[0][0]).toEqual(1590488271907);
  });
});
