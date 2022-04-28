const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

describe("Test para explorer service", () => {
    test("1. How many explorers are in the mission Node.js", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toHaveLength(10);
    });

    test("2. Amount of explorers by mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(10);
    });

    test("3. Mentions ajolonauta", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const userNameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const ajolonautas = ["ajolonauta1"];
        expect(userNameInNode).toEqual(expect.arrayContaining(ajolonautas));
    });

    test("4. Looks for stack", () => {
        const example = [{"githubUsername": "ajolonauta15","stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14",  "stacks": ["elm"]}];
        const UsernameByStacks = ExplorerService.getExplorersStacks(example, "elixir");
        expect(UsernameByStacks[0]).toMatch(/ajolonauta15/);
    });

});