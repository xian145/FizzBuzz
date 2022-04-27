const Reader = require("../../lib/utils/Reader");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para explorer service", () => {

    test("1. ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const listOfExplorersTrick = explorers.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
        expect(listOfExplorersTrick[1].trick).not.toBe(undefined);
    });

    test("2. fizzbuzz ", () => {
        const consult = 15;
        const trick = FizzbuzzService.applyValidationInNumber(consult);
        expect(trick.trick).toBe("FIZZBUZZ");
    });

    test("3. buzz", () => {
        const consult = 10;
        const trick = FizzbuzzService.applyValidationInNumber(consult);
        expect(trick.trick).toBe("BUZZ");
    });

    test("4. fizz", () => {
        const consult = 9;
        const trick = FizzbuzzService.applyValidationInNumber(consult);
        expect(trick.trick).toBe("FIZZ");
    });

    test("5. 2", () => {
        const consult = 2;
        const trick = FizzbuzzService.applyValidationInNumber(consult);
        expect(trick.trick).toBe(2);
    });

});