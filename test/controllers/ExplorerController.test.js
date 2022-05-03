const ExplorerController = require("../../lib/controllers/ExplorerController");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para explorerController", () => {
    test("1. explorers by mission", () => {
        const explorer = ExplorerController.getExplorersByMission("node");
        expect(explorer).toHaveLength(10);
    });

    test("2. Amount of explorers by mission", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorers).toBe(10);
    });

    test("3. Mentions ajolonauta", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        const ajolonautas = ["ajolonauta1"];
        expect(explorers).toEqual(expect.arrayContaining(ajolonautas));
    });

    test("4. Telegram bot", () => {
        const message = 'node'
        const num = "xd"
        const explorer = ExplorerController.bot(num, message)
        expect(explorer).toMatch(/Woopa/);
    })

});