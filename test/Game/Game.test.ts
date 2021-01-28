import { Game } from "../../src/Game/Game";

describe("LevelProgression", () => {
  test("check if King is Checkmated on position [3][4]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(true);
  });

  test("check if King is Checkmated on position [5][2]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(true);
  });

  test("check if King is Checkmated on position [0][0]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(true);
  });

  test("check if King is Checkmated on position [2][2]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(true);
  });

  test("check if King is Checkmated on position [7][0]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(false);
  });

  test("check if King is Checkmated on position [6][1]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(false);
  });

  test("check if King is Checkmated on position [5][2]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(false);
  });

  test("check if King is Checkmated on position [3][0]", () => {
    const result = Game.prototype.isCheckmated();
    expect(result).toBe(false);
  });
});
