const express = require('express');
const compression = require('compression');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());

app.get('/info', (req,res) => {
    let info = {
        argumentosEntrada: process.argv,
        nombrePlataforma: process.platform,
        versionNode: process.version,
        usoMemoria: process.memoryUsage(),
        pathEjecucion: process.argv[0],
        processId: process.pid,
        currentFolder: process.cwd()
    }

    /*TEST
    console.log(info)
    */
    res.send(info)
})

app.listen(8080, ()=>{
    console.log("App listening on port 8080");
})