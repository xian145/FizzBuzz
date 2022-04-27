const Reader = require("../../lib/utils/Reader");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para explorer service", () => {

    test("1. ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const listOfExplorersTrick = explorers.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
        expect(listOfExplorersTrick[1].trick).not.toBe(undefined);
    });

});