// Story: you want to cook a meal, so you go to the shop for ingredients. You only have 30$, but you want to prepare the tastiest meal.

// Task: output top ten tastiest meals you can prepare from ingredients you can buy.

var shop = [
  { name: 'tomato', price: 5, tastiness: 8 },
  { name: 'pepper', price: 6, tastiness: 9 },
  { name: 'beef', price: 15, tastiness: 14 },
  { name: 'curry', price: 8, tastiness: 7 },
  { name: 'mayo', price: 7, tastiness: 6 },
  { name: 'chocolate', price: 12, tastiness: 11 },
  { name: 'vodka', price: 13, tastiness: 10 }
];

var totalMoney = 30;

/*
tomato + pepper + mayo + chocolate for 30$, tastiness: 34
tomato + pepper + beef for 26$, tastiness: 31
pepper + beef + curry for 29$, tastiness: 30
tomato + pepper + curry + mayo for 26$, tastiness: 30
tomato + beef + curry for 28$, tastiness: 29
pepper + beef + mayo for 28$, tastiness: 29
tomato + chocolate + vodka for 30$, tastiness: 29
tomato + beef + mayo for 27$, tastiness: 28
tomato + pepper + chocolate for 23$, tastiness: 28
tomato + pepper + vodka for 24$, tastiness: 27
*/