const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersNode = ExplorerService.filterByMission(explorers, mission);
        return ExplorerService.getExplorersUsernamesByMission(explorersNode, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersNode = ExplorerService.filterByMission(explorers, mission);
        return ExplorerService.getAmountOfExplorersByMission(explorersNode, mission);
    }

    static fizzbuzz(number){
        const consult = FizzbuzzService.applyValidationInNumber(number);
        return consult;
    }

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersStacks(explorers, stack);
    }
    
    static botfizzbuzz(number){
        const consult = FizzbuzzService.botapplyValidationInNumber(number);
        return consult;
    }

    static botFizzBuzz (numberToApplyFb){
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.botfizzbuzz(numberToApplyFb);
            return `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        } else {
            return "Envía un número válido"
        }
    }

}

module.exports = ExplorerController;