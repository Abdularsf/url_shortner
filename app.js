import { createServer } from "http";
import { readFile } from "fs/promises";
import path from "path";

const serverFile = (res,filePath,contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 page Not fount");
    }
}

const server = createServer(async (req, res) => {
    if (req.method == "GET") {
        if (req.url == "/") {
            return serverFile(res,path.join("public","index.html"),"text/html");
        }
        else if (req.url == "/style.css") {
            return serverFile(res,readFile(path.join("public","style.css")),"text/css");
        } else {
            res.writeHead(404);
            res.end("Not Found");
        }
    }
})

server.listen(3000, () => {
    console.log("server running");
})