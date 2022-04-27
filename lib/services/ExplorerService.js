class ExplorerService {

    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const numberOfExplorersInMission = explorers.filter((explorer) => explorer.mission == mission).length;
        return numberOfExplorersInMission;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const Usernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = Usernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

}

module.exports = ExplorerService;