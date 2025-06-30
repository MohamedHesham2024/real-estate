import { LetterByLetterPipe } from './letter-by-letter.pipe';

describe('LetterByLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new LetterByLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
