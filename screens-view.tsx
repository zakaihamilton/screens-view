import screens from "screens-js"
import { renderToNodeStream } from 'react-dom/server';
import React, { useState } from 'react';

screens.startup().then(async () => {
    await screens.import("packages", __dirname, async (path: string) => {
        console.log(path);
        await import("./" + path);
    });
    await screens.init();
    console.log("init complete");
    screens.CoreHttp.register(/^\/$/, (req: any, resp: any) => {
        let headers = {
            "Content-Type": "text/html",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        };

        resp.writeHead(200, headers);
        resp.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
        let Example = screens.Example;
        const stream = renderToNodeStream(<Example />);
        stream.pipe(resp, { end: false });
        stream.on('end', () => {
            resp.write("</div></body></html>");
            resp.end();
        });
    });
});
