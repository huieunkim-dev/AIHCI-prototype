import icon_no_sugar_svg from "../assets/icon-no-sugar.svg";
import icon_coffee_bean_svg from "../assets/icon-coffee-bean.svg";
import menu_big_coffee_png from "../assets/menu-big-coffee.png";
import menu_coffee_png from "../assets/menu-coffee.png";
import menu_decaf_milk_png from "../assets/menu-decaf-milk.png";
import menu_vanilla_almond_png from "../assets/menu-vanilla-almond.png";
import menu_watermelon_juice_png from "../assets/menu-watermelon-juice.png";
import menu_grapefruit_soda_png from "../assets/menu-grapefruit-soda.png";
import menu_choco_honey_png from "../assets/menu-choco-honey.png";
const iconNoSugar = icon_no_sugar_svg;
const iconCoffeBean = icon_coffee_bean_svg;

export const MENU_ITEMS = [
  {
    id: "big-coffee",
    name: "아주 큰 원두커피",
    price: 3000,
    img: menu_big_coffee_png,
    imgStyle: { width: "235.55%", height: "105.32%", left: "-67.58%", top: "-4.02%" },
    categories: ["추천 메뉴", "커피"],
    quote: "\"깔끔하고 달지 않아요\"",
    infoItems: [
      { text: "설탕이 안들어가요", icon: iconNoSugar },
      { text: "기본 원두커피 + 물이에요", icon: iconCoffeBean },
    ],
  },
  {
    id: "regular-coffee",
    name: "일반 원두커피",
    price: 2000,
    img: menu_coffee_png,
    imgStyle: { width: "259.91%", height: "113.46%", left: "-80.17%", top: "-12.05%" },
    categories: ["추천 메뉴", "커피"],
    quote: "\"진하고 고소해요\"",
    infoItems: [
      { text: "설탕이 안들어가요", icon: iconNoSugar },
      { text: "기본 원두커피 + 물이에요", icon: iconCoffeBean },
    ],
  },
  {
    id: "decaf-milk",
    name: "카페인 없는 커피우유",
    price: 2900,
    img: menu_decaf_milk_png,
    imgStyle: { width: "207.22%", height: "100.11%", left: "-52.23%", top: "0%" },
    categories: ["추천 메뉴", "커피"],
    quote: "\"카페인 걱정 없이 마셔요\"",
    infoItems: [
      { text: "카페인이 없어요", icon: iconNoSugar },
      { text: "커피우유 맛이에요", icon: iconCoffeBean },
    ],
  },
  {
    id: "vanilla-almond",
    name: "바닐라 아몬드 커피우유",
    price: 3900,
    img: menu_vanilla_almond_png,
    imgStyle: { objectFit: "contain", objectPosition: "bottom" },
    imgDirect: true,
    categories: ["추천 메뉴", "커피"],
    quote: "\"달콤하고 고소해요\"",
    infoItems: [
      { text: "바닐라 향이 나요", icon: iconCoffeBean },
      { text: "아몬드가 들어가요", icon: iconCoffeBean },
    ],
  },
  {
    id: "watermelon-coconut",
    name: "수박 코코넛 주스",
    price: 4400,
    img: menu_watermelon_juice_png,
    imgStyle: { width: "255.51%", height: "103.31%", left: "-77.54%", top: "-1.6%" },
    categories: ["추천 메뉴", "에이드&스무디"],
    quote: "\"시원하고 달콤해요\"",
    infoItems: [
      { text: "수박 과육이 들어가요", icon: iconCoffeBean },
      { text: "코코넛 향이 나요", icon: iconCoffeBean },
    ],
  },
  {
    id: "grapefruit-soda",
    name: "자몽 탄산 음료",
    price: 4000,
    img: menu_grapefruit_soda_png,
    imgStyle: { width: "264.47%", height: "108.41%", left: "-82.46%", top: "-6.1%" },
    categories: ["추천 메뉴", "에이드&스무디"],
    quote: "\"상큼하고 시원해요\"",
    infoItems: [
      { text: "자몽 과즙이 들어가요", icon: iconCoffeBean },
      { text: "탄산이 들어있어요", icon: iconNoSugar },
    ],
  },
  {
    id: "choco-honey",
    name: "초코 꿀 퐁당 조리퐁",
    price: 3900,
    img: menu_choco_honey_png,
    imgStyle: { width: "256.6%", height: "104.87%", left: "-77.87%", top: "-3.48%" },
    categories: ["추천 메뉴", "에이드&스무디", "차"],
    quote: "\"달콤한 초코 음료예요\"",
    infoItems: [
      { text: "꿀이 들어가요", icon: iconCoffeBean },
      { text: "초코 퐁당이 올라가요", icon: iconCoffeBean },
    ],
  },
  {
    id: "regular-coffee-hot",
    name: "일반 원두커피",
    price: 4500,
    img: menu_coffee_png,
    imgStyle: { width: "259.91%", height: "113.46%", left: "-80.17%", top: "-12.05%" },
    categories: ["차"],
    quote: "\"진하고 고소해요\"",
    infoItems: [
      { text: "설탕이 안들어가요", icon: iconNoSugar },
      { text: "기본 원두커피 + 물이에요", icon: iconCoffeBean },
    ],
  },
  {
    id: "watermelon-tea",
    name: "수박 코코넛 주스",
    price: 4400,
    img: menu_watermelon_juice_png,
    imgStyle: { width: "255.51%", height: "103.31%", left: "-77.54%", top: "-1.6%" },
    categories: ["차"],
    quote: "\"시원하고 달콤해요\"",
    infoItems: [
      { text: "수박 과육이 들어가요", icon: iconCoffeBean },
      { text: "코코넛 향이 나요", icon: iconCoffeBean },
    ],
  },
];

export const CATEGORIES = ["추천 메뉴", "커피", "에이드&스무디", "차"];

export function getItemsByCategory(category) {
  return MENU_ITEMS.filter((item) => item.categories.includes(category));
}

export function getItemById(id) {
  return MENU_ITEMS.find((item) => item.id === id);
}
