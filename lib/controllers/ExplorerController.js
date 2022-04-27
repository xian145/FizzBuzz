const ExplorerService = require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')
const Reader = require('../utils/Reader')

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        return ExplorerService.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        const explorersNode = ExplorerService.filterByMission(explorers, mission)
        return ExplorerService.getExplorersUsernamesByMission(explorersNode, mission)
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        const explorersNode = ExplorerService.filterByMission(explorers, mission)
        return ExplorerService.getAmountOfExplorersByMission(explorersNode, mission)
    }

}

module.exports = ExplorerController