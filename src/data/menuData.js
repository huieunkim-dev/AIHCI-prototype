export const MENU_ITEMS = [
  {
    id: "big-coffee",
    name: "아주 큰 원두커피",
    price: 3000,
    img: "http://localhost:3845/assets/0e87f376593f99affc93cdffc3894f08dfa93a9b.png",
    imgStyle: { width: "235.55%", height: "105.32%", left: "-67.58%", top: "-4.02%" },
    categories: ["추천 메뉴", "커피"],
  },
  {
    id: "regular-coffee",
    name: "일반 원두커피",
    price: 2000,
    img: "http://localhost:3845/assets/e343c05fba0a512a6d297be9c33861b1a2662bc4.png",
    imgStyle: { width: "259.91%", height: "113.46%", left: "-80.17%", top: "-12.05%" },
    categories: ["추천 메뉴", "커피"],
  },
  {
    id: "decaf-milk",
    name: "카페인 없는 커피우유",
    price: 2900,
    img: "http://localhost:3845/assets/91e092777f4b928a34d6b7300ce1dff0ab41583a.png",
    imgStyle: { width: "207.22%", height: "100.11%", left: "-52.23%", top: "0%" },
    categories: ["추천 메뉴", "커피"],
  },
  {
    id: "vanilla-almond",
    name: "바닐라 아몬드 커피우유",
    price: 3900,
    img: "http://localhost:3845/assets/686c86585a0f2bcb0636d05583d61f78bd03e279.png",
    imgStyle: { objectFit: "contain", objectPosition: "bottom" },
    imgDirect: true,
    categories: ["추천 메뉴", "커피"],
  },
  {
    id: "watermelon-coconut",
    name: "수박 코코넛 주스",
    price: 4400,
    img: "http://localhost:3845/assets/d4fec0d9ac1edebe77e1708cd40a708f01894e5b.png",
    imgStyle: { width: "255.51%", height: "103.31%", left: "-77.54%", top: "-1.6%" },
    categories: ["추천 메뉴", "에이드&스무디"],
  },
  {
    id: "grapefruit-soda",
    name: "자몽 탄산 음료",
    price: 4000,
    img: "http://localhost:3845/assets/7a2562de7a6fe19ce59861b73cd9f5eb241327f7.png",
    imgStyle: { width: "264.47%", height: "108.41%", left: "-82.46%", top: "-6.1%" },
    categories: ["추천 메뉴", "에이드&스무디"],
  },
  {
    id: "choco-honey",
    name: "초코 꿀 퐁당 조리퐁",
    price: 3900,
    img: "http://localhost:3845/assets/8d76bede68c4eaf9794295ee57df56a11c275fee.png",
    imgStyle: { width: "256.6%", height: "104.87%", left: "-77.87%", top: "-3.48%" },
    categories: ["추천 메뉴", "에이드&스무디", "차"],
  },
  {
    id: "regular-coffee-hot",
    name: "일반 원두커피",
    price: 4500,
    img: "http://localhost:3845/assets/e343c05fba0a512a6d297be9c33861b1a2662bc4.png",
    imgStyle: { width: "259.91%", height: "113.46%", left: "-80.17%", top: "-12.05%" },
    categories: ["차"],
  },
  {
    id: "watermelon-tea",
    name: "수박 코코넛 주스",
    price: 4400,
    img: "http://localhost:3845/assets/d4fec0d9ac1edebe77e1708cd40a708f01894e5b.png",
    imgStyle: { width: "255.51%", height: "103.31%", left: "-77.54%", top: "-1.6%" },
    categories: ["차"],
  },
];

export const CATEGORIES = ["추천 메뉴", "커피", "에이드&스무디", "차"];

export function getItemsByCategory(category) {
  return MENU_ITEMS.filter((item) => item.categories.includes(category));
}

export function getItemById(id) {
  return MENU_ITEMS.find((item) => item.id === id);
}
