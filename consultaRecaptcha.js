const axios = require('axios');

const CAPSOLVER_API_KEY = "your capsolver.com api key";
let PROXY = "";

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function createTask(payload){
    try{
        const res = await axios.post('https://api.capsolver.com/createTask', {
            clientKey: CAPSOLVER_API_KEY,
            task: payload
        });
        return res.data;
    }catch(error){
        console.error(error);
    }
}

async function getTaskResult(taskId){
    try{
        success = false;
        while(success == false){
            await  sleep(1000);
            console.log("Getting task result for task ID:" + taskId);
            const res = await axios.post('https://api.capsolver.com/getTaskResult', {
                clientKey: CAPSOLVER_API_KEY,
                taskId: taskId
            });
            if( res.data.status == "ready") {
                success = true;
                console.log(res.data)
                return res.data;
              }
        }
    }catch(error){
        console.error(error);
    }
}

async function solveHcaptcha(){
    const taskPayload = {
        type: "HCaptchaTask",
        websiteURL: "https://www.nfe.fazenda.gov.br",
        websiteKey: "e72d2f82-9594-4448-a875-47ded9a1898a",
        "proxy": PROXY
    };
    const taskData = await createTask(taskPayload);
    return getTaskResult(taskData.taskId);
}

async function main(){
    try{
        const response = await solveHcaptcha();
        console.log(`Received token: ${response.solution.gRecaptchaResponse}`);

    }catch(error){
        console.error(error);
    }
}
main();
