import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
import App from "../src/App";
import path from "node:path";
import fs from "node:fs";

const app = express();

const assetManifest = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../build/asset-manifest.json"),
    "utf-8"
  )
)["files"];

app.get("/", (req, res) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React server side render</title>
        <link rel="stylesheet" href={assetManifest["main.css"]} />
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>,
    {
      bootstrapScripts: [assetManifest["main.js"]],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    }
  );
});

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(3002, () => {
  console.log(`App is running on http://localhost:3002`);
});
