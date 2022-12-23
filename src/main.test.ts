// This is just a dummy test to see that Jest works


function percentError(initial: number, final: number) {
   let result = undefined;
   if (initial > 0) {
      result = (initial - final) / initial * 100.0
   }
   return result;
}

describe('Dummy tests', () => {

   test('Calculating a percentage', () => {
      expect(percentError(10, 1)).toBe(90.0);
   });

   test('Cannot calculate percent with invaid input', () => {
      expect(percentError(-10, 1)).toBe(undefined);
   });

});
