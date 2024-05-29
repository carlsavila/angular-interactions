import { Kitten } from './kitten';

describe('Kitten', () => {
  it('should create an instance', () => {
    expect(new Kitten("Mon chaton","chat", new Date(),"lien image",)).toBeTruthy();
  });
});
