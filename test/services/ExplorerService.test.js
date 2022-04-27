const ExplorerService = require('../../lib/services/ExplorerService')
const Reader = require('../../lib/utils/Reader')

describe('Test para explorer service', () => {
    test('1. How many explorers are in the mission Node.js', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersInNode = ExplorerService.filterByMission(explorers, 'node');
        expect(explorersInNode.length).toBe(10)
    })

    test('2. Amount of explorers by mission', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
        expect(explorersInNode).toBe(10)
    })
})