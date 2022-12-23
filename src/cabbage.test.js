// This is just a dummy test to see that Jest works


function percentError(start, last) {
   let result = undefined;
   if (start > 0) {
      result = (start - last) / start * 100.0
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
