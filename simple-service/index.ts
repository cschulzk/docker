let total = 0;
const runs = 20000;
const url = process.env.API_URL || 'http://localhost:3000/';

console.log(`API url: ${url}`);

const callAPI = async () => {
    const res = await fetch(url);
    const {counter} = JSON.parse(await res.text());
    total = total + Number(counter);
};

for (let i=0; i<runs; i++) {
    await callAPI();
}

console.log(`# of runs: ${runs}`);
console.log(`End result: ${total}`);

export {}
