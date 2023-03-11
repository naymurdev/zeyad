let data = [
  {
    onLoadImg: "/img/bottomProductImage/01BottomProduct_home.jpg",
    onLoadTitle: "Classic mafia tee",
    onLoadSubTitles: "$24.98",
    hoverSubTitles: ["s", "m", "l"],
  },
  {
    onLoadImg: "/img/bottomProductImage/02BottomProduct_home.jpg",
    onLoadTitle: "Classic mafia long sleave",
    onLoadSubTitles: "$48.98",
    hoverSubTitles: ["s", "m", "l"],
  },
  {
    onLoadImg: "/img/bottomProductImage/03BottomProduct_home.jpg",
    onLoadTitle: "Classic 24k tee",
    onLoadSubTitles: "$27.98",
    hoverSubTitles: ["s", "m", "l"],
  },
  {
    onLoadImg: "/img/bottomProductImage/04BottomProduct_home.jpg",
    onLoadTitle: "Classic mafia hoodie ",
    onLoadSubTitles: "$77.74",
    hoverSubTitles: ["s", "m", "l"],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
