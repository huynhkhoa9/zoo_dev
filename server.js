// server.js
//
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

router.post("/api/auth/signin", (req, res) =>{});
router.post("/api/auth/signup", (req, res) =>{});
router.post("/api/auth/employeesignin", (req, res) =>{});
router.post("/api/auth/addanimal", (req, res) =>{});
router.post("/api/auth/addemployee", (req, res) =>{});
router.post("/api/auth/addrevenue", (req, res) =>{});
router.post("/api/auth/getAnimals", (req, res) =>{});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});