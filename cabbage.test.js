// This is just a dummy test to see that Jest works


function percentError(start, last) {
   let result = undefined;
   if (start > 0) {
      result = (start - last) / start * 100.0
   }
   return result;
}

describe('User tests', () => {

   test('Can initialize a new User object', () => {
      expect(percentError(10, 1)).toBe(90.0);
   });
});
