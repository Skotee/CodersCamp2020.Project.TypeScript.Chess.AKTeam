import sum from "./test";

describe('calculate', () => {
   test('should return correct value', () => {
       // when
       const result = sum(5, 4);

       // then
       expect(result).toBe(9);
   });
});