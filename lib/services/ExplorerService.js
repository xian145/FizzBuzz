class ExplorerService {

    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const numberOfExplorersInMission = explorers.filter((explorer) => explorer.mission == mission).length
        return numberOfExplorersInMission
    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService