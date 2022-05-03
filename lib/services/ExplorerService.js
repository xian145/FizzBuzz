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

    static getExplorersStacks(explorers, stack){
        const StackExplorer = explorers.filter((explorer) => explorer.stacks.includes(stack));
        const StackExplorerUsername = StackExplorer.map((explorer) => explorer.githubUsername)
        return StackExplorerUsername
    }

    static getExplorersNamesByMission(explorers, message){
        const Names = explorers.filter((explorer) => explorer.mission == message);
        const NamesInMission = Names.map((explorer) => explorer.name);
        return NamesInMission.toString();
    }

}

module.exports = ExplorerService;