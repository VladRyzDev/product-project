import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with add class", () => {
    const expented = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expented);
  });
  test("with mods", () => {
    const expented = "someClass class1 class2 hovered scrollable";
    expect(classNames("someClass", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe(expented);
  });
  test("with mods false", () => {
    const expented = "someClass class1 class2 hovered";
    expect(classNames("someClass", { hovered: true, scrollable: false }, ["class1", "class2"])).toBe(expented);
  });
  test("with mods undefined", () => {
    const expented = "someClass class1 class2 hovered";
    expect(classNames("someClass", { hovered: true, scrollable: undefined }, ["class1", "class2"])).toBe(expented);
  });
});
