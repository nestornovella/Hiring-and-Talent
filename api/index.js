"use strict"; // Uso modo estricto para depurar errores silenciosos de JavaScript
const server = require("./src/server");
const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Connection ok in port ${port}`));