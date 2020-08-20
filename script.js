let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
img1.src = 'img/shirt.jpg'
img2.src = 'img/socks.jpg'
img3.src = 'img/jacket.jpg'
img4.src = 'img/shoes.jpg'



const goods = [
  { title: 'Shirt', price: 150, image: img1},
  { title: 'Socks', price: 50, image: img2 },
  { title: 'Jacket', price: 350, image: img3 },
  { title: 'Shoes', price: 250, image: img4 },
];

function renderGoodsItem(title, price){
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><div>${image}</div></div>`;
};

function renderGoodsList(list){
  const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);