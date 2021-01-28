import {isChecked} from "../test";

describe("LevelProgression", () => {
  test("check if King is isChecked on position [3][4]", () => {
    const result = isChecked();
    expect(result).toBe(true);
  });

  test("check if King is isChecked on position [5][2]", () => {
    const result = isChecked();
    expect(result).toBe(true);
  });

  test("check if King is isChecked on position [0][0]", () => {
    const result = isChecked();
    expect(result).toBe(true);
  });

  test("check if King is isChecked on position [2][2]", () => {
    const result = isChecked();
    expect(result).toBe(true);
  });

  test("check if King is isChecked on position [7][0]", () => {
    const result = isChecked();
    expect(result).toBe(false);
  });

  test("check if King is isChecked on position [6][1]", () => {
    const result = isChecked();
    expect(result).toBe(false);
  });

  test("check if King is isChecked on position [5][2]", () => {
    const result = isChecked();
    expect(result).toBe(false);
  });

  test("check if King is isChecked on position [3][0]", () => {
    const result = isChecked();
    expect(result).toBe(false);
  });
});
