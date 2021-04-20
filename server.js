// server.js
//
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.router();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

router.post("/api/auth/signin", controller.signin)
router.post("/api/auth/signup", controller.signup)
router.post("/api/auth/employeesignin", controller.employeesignin)
router.post("/api/auth/addanimal", controller.addanimal)
router.post("/api/auth/addemployee", controller.addemployee)
router.post("/api/auth/addrevenue", controller.addrevenue)
router.post("/api/auth/getAnimals", controller.getAnimals)

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});