
const path = require ('path');
constbodyParser = ('body-parser');
const mongoose = require ('mongoose');
const cors = require ('cors')
const path = require('path');

const postRoutes = require ('./routes/posts.js');
const userRouter = require("./routes/user.js");

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



const CONNECTION_URL = 'mongodb+srv://mikeberg30:mikeberg30@cluster0.sc2qkp6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`NOW RUNNING ON ${PORT}`)))
  .catch((error) => console.log(`${error} Connect failed`));

mongoose.set('useFindAndModify', false); 