const serverPort = process.env.PORT || 3000;

const server = Bun.serve({
    fetch(_req: Request): Response | Promise<Response> {
        const rand = Math.round(Math.random()*1000);
        if (rand < 500) {
            return new Response(JSON.stringify({counter: -1}));
        } else if (rand > 500) {
            return new Response(JSON.stringify({counter: 1}));
        } else {
            console.log("Huh? What are the odds of that?");
            return new Response(JSON.stringify({counter: 0}));
        }
    },
    port: serverPort,
});

console.log(`Listening on localhost:${server.port}`);
