import Location from "./index.js";

describe("patterns/prototype", () => {
  it("should be able to initialize monsters in the location", () => {
    const location = new Location("dryHills", 3, { type: "undead" });

    expect(location.monsters.length).toBe(3);
    expect(
      location.monsters.every((monster) => monster.settings.type === "undead")
    ).toBeTruthy();
  });

  it("should be able to clone a location and change monsters type", () => {
    const location = new Location("dryHills", 3, { type: "undead" });
    const newLocation = location.clone();

    newLocation.name = "laveCavern";
    newLocation.monstersSettings.type = "demon";

    expect(
      newLocation.monsters.every((monster) => monster.settings.type === "demon")
    ).toBeTruthy();
    expect(
      location.monsters.every((monster) => monster.settings.type === "undead")
    ).toBeTruthy();
  });
});
