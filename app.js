import {createServer} from "http";

const server = createServer(async (req,res) =>{
    if(req.method == "GET"){
        if(req.url = "/"){
            try {
                
            } catch (error) {
                res.writeHead(404,{"Content-Type": "text/html"});
                res.end("404 page Not fount");
            }
        }
    }
})