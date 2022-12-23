// This is just a dummy test to see that Jest works



function percentError(initial: number, final: number) {
   let result = undefined;
   if (initial > 0) {
      result = (initial - final) / initial * 100.0
   }
   return result;
}

describe('User tests', () => {

   test('Can initialize a new User object', () => {
      expect(percentError(10, 1)).toBe(90.0);
   });
});
