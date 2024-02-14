import { ConvertUnixToDateGMTPipe } from './convert-unix-to-date-gmt.pipe';

describe('ConvertUnixToDateGMTPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertUnixToDateGMTPipe();
    expect(pipe).toBeTruthy();
  });
});
