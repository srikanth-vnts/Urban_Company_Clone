
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "urbanclone";

//database credentials;
const USERNAME = "urbanclone";
const PASSWORD = "urbanclone";

//default app port
const PORT =process.env.PORT || 3333;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.r35kx.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

// mongodb+srv://urbanclone:<password>@cluster0.r35kx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}