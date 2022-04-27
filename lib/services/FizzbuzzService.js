class FizzbuzzService {

    static applyValidationInExplorer(explorer){
        if(explorer.score % 3 === 0 && explorer.score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
        if(explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        else explorer.trick = explorer.score;
        return explorer;
    }

    static applyValidationInNumber(number){
        const consult = {score: number}
        if(consult.score % 3 === 0 && consult.score % 5 === 0){
            consult.trick = "FIZZBUZZ";
            return consult;
        }
        if(consult.score % 3 === 0){
            consult.trick = "FIZZ";
            return consult;
        }
        if(consult.score % 5 === 0){
            consult.trick = "BUZZ";
            return consult;
        }
        else consult.trick = consult.score;
        return consult;
    }

}

module.exports = FizzbuzzService;