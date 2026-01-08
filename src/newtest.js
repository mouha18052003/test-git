const app = express();

app.get("/", (req, res) => {
  res.send("Serveur Node.js fonctionne !");
});

const PORT = process.env.PORT || 3000;

