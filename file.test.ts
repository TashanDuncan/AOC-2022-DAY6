import { isUnique, tuningTrouble } from "./file";
describe('Tuning Trouble', () => { 
  it('should return true if the next 3 elements of an array are unique', () => {
      
      expect(isUnique([1,2,3,4,5], 0, 4)).toEqual(true)
      expect(isUnique([1,2,2,4,5], 0, 4)).toEqual(false)
  });

  it('should work with examples from readme', () => {
    
    expect(tuningTrouble('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toEqual(5)
    expect(tuningTrouble('nppdvjthqldpwncqszvftbrmjlhg', 4)).toEqual(6)
    expect(tuningTrouble('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toEqual(10)
    expect(tuningTrouble('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toEqual(11)
  });

  it('should work with examples from readme part 2', () => {
    
    expect(tuningTrouble('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toEqual(23)
    expect(tuningTrouble('nppdvjthqldpwncqszvftbrmjlhg', 14)).toEqual(23)
    expect(tuningTrouble('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toEqual(29)
    expect(tuningTrouble('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toEqual(26)
  });



 })