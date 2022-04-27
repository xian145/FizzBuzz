class ExplorerService {

    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService