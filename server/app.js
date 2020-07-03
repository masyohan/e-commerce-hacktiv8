if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));