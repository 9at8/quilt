import {parseDateString} from '../parse-date-string';

describe('parseDateString()', () => {
  describe('UTC timezone', () => {
    it('parses yyyy-mm-dd date strings', () => {
      const actual = parseDateString('2018-05-28', 'UTC');
      const expected = new Date('2018-05-28T00:00:00+00:00');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ss date strings', () => {
      const actual = parseDateString('2018-05-28T12:30:00', 'UTC');
      const expected = new Date('2018-05-28T12:30:00+00:00');

      expect(actual).toEqual(expected);
    });

    it('ignores timezone parameter for dates with embedded timezones', () => {
      const actual = parseDateString('2018-05-28T12:30:00+05:30', 'UTC');
      const expected = new Date('2018-05-28T12:30:00+05:30');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ss-hh:mm date strings', () => {
      const actual = parseDateString('2018-05-28T12:30:00-05:15', 'UTC');
      const expected = new Date('2018-05-28T12:30:00-05:15');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ssZ date strings', () => {
      const actual = parseDateString('2018-05-28T12:30:00Z', 'UTC');
      const expected = new Date('2018-05-28T12:30:00+00:00');

      expect(actual).toEqual(expected);
    });
  });

  describe('not UTC timezone', () => {
    it('parses yyyy-mm-dd date strings', () => {
      const actual = parseDateString('2018-05-28', 'Australia/Perth');
      const expected = new Date('2018-05-28T00:00:00+08:00');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ss date strings', () => {
      const actual = parseDateString('2018-05-28T12:30:00', 'Australia/Perth');
      const expected = new Date('2018-05-28T12:30:00+08:00');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ss+hh:mm date strings', () => {
      const actual = parseDateString(
        '2018-05-28T12:30:00+05:30',
        'Australia/Perth',
      );
      const expected = new Date('2018-05-28T12:30:00+05:30');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ss-hh:mm date strings', () => {
      const actual = parseDateString(
        '2018-05-28T12:30:00-05:15',
        'Australia/Perth',
      );
      const expected = new Date('2018-05-28T12:30:00-05:15');

      expect(actual).toEqual(expected);
    });

    it('parses yyyy-mm-ddT:hh:mm:ssZ date strings', () => {
      const actual = parseDateString('2018-05-28T12:30:00Z', 'Australia/Perth');
      const expected = new Date('2018-05-28T12:30:00+00:00');

      expect(actual).toEqual(expected);
    });
  });
});
