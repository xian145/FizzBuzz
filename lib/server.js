const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const FizzbuzzService = require("./services/FizzbuzzService");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const numberOfExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({message: `mission: ${mission}, quantity: ${numberOfExplorersInMission}`});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({message: `mission: ${mission}, usernames: ${usernamesByMission}`});
});

app.get("/v1/consult/:number", (request, response) => {
    const consult = request.params.number;
    const responseConsult = FizzbuzzService.applyValidationInNumber(consult);
    response.json(responseConsult);
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersByStack = ExplorerController.getExplorersByStack(stack);
    response.json({explorersByStack});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});