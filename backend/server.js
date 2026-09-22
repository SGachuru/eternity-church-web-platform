const express = require("express");
const cors = require("cors");

const app = express();
const PORT = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "church-backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/site", (req, res) => {
  res.json({
    name: "Eternity Gospel Church",
    location: "Karen, Nairobi",
    tagline: "Gather. Grow. Go.",
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Sermons", href: "/sermons" },
      { label: "Events", href: "/events" },
      { label: "Giving", href: "/giving" },
      { label: "Contact", href: "/contact" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
