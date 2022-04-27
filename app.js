const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService")

//Clase con la que obtenemos la lista de explorers
const explorers = Reader.readJsonFile("explorers.json");

//Filtrado sobre la lista de explorers
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
const numberOfExplorerinNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const explorerUserNameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

//Asignacion de propiedad trick
const listOfExplorersTrick = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer))
console.log(listOfExplorersTrick);
