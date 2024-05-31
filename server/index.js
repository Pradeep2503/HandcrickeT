const express=require("express")
const mongoose = require("mongoose");
const cors=require("cors")
const app = express();
const bodyParser=require( "body-parser" )
const uri ="mongodb+srv://pradeepkumar:2tf9vIuo4RTuukr5@cluster0.hkkmaoi.mongodb.net/Handcricket_db";
const port=3001;

app.use(cors());
app.use(express.json());

mongoose.connect( uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const dbConn = mongoose.connection;

dbConn.on("error" , console.error.bind(console, "Connection Error"));
dbConn.on("open", function(){
  console.log("DB Connection succesful");
})

const PlayerSchema = new mongoose.Schema({ 
    winners:String,
    runs:String
}); 
    
// Creating model objects 
const PlayerModel = mongoose.model('handcricket_collections', PlayerSchema);

app.get('/', async (req, res) => {
    try {
      const players = await PlayerModel.find({});
      console.log(players);
      res.json(players);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  
app.post('/', async (req, res) => {
  try {
    const {winners,runs} = req.body;
    const PPlayerModel = new PlayerModel({winners,runs});
    await PPlayerModel.save()
    res.status(201).json({ message: "Player Saved successfully" });
    
  } catch (error) {
    console.error("Error saving Player:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(port , () => console.log(`app listening on port !`));
