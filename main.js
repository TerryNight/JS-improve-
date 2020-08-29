const goods = [
    { title: 'Assasin’s Creed: Rogue', price: 2980},
    { title: 'Tomb Raider', price: 259},
    { title: 'Ryse: Son Of Rome', price: 1999},
    { title: 'World Of Warcraft:Wrath Of The Linch King', price: 1700},
  ];
  
class GoodsItem {
   constructor(title, price, img){
   this.title = title;
   this.price = price;
   this.img = img;
}
_render(title, price){
   return `
  <div id = "rec_1" class = "rec">
  <div class = "text_gallery one_gallery"> <a href = "#" class = "">${title}</a>
    <p class="featured_price"><span class = "">$${price}</span></p>
  <button class = "button">Buy</button>
  </div>` ;
   }
}

class GoodsList{
  constructor(){
      this.goods = [];
  }
  _fetchGoods(){
    this.goods = goods;
  }

  _render(){
    let html = '';
    this.goods.forEach(({ title, price }) => {
      const goodItem = new GoodsItem(title, price);
      html += goodItem._render(title, price);
    })
    document.querySelector('.goods-list').innerHTML = html;
  }

//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  _sum(){
    let summary = 0;
    this.goods.forEach(item=>summary+=item.price);
    return summary;
  }
}

const list = new GoodsList();
list._fetchGoods();
list._render();


//makeGETRequest()
function makeGETRequest(url, callback){
  let xhr;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}
else if(window.ActiveXObject){
    xhr = new ActiveXObject(s: "Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
      callback(JSON.parse(xhr.response));
  }
  }
xhr.open(method: 'GET', url);

//отправка запроса
xhr.send()
}

makeGETRequest()

class BasketItem{
  constructor(goodItem){
          this.name = this.name,
          this.price = this.price,
          this.img = this.img,
          this.desc = this.desc, //short description
          this.quantity  = this.quantity
  }
  //Удалить товар
  deleteItem = () => {
      let index = event.target.goodItem;
      BasketItem.deleteItem(index);
  }
  //добавить товар в корзину
  addItem = () => {
      let goodName = event.target.goodItem;
      let product = GoodsItem[goodName];
      BasketItem.addItem(product);
  }
}

class Basket{
  constructor(goodItem){
      this.goodItem = []
  }
  //Очистка корзины
  clearBasket(){

  }
  
  //Общая сумма товаров
  total_sum(){

  }
  //Перейти к оплате
  payAll(){

  }
  //Увеличитить количество товара
  sizeItem(){}
  _render(){
    let html = '';
    this.goodItem.forEach(({ title, price }) => {
      const goodItem = new GoodsItem(title, price);
      html += goodItem._render(title, price);
    })
    document.querySelector('.goods-list').innerHTML = html;
  }
}
 //получение списка товаров
var openBasket = () => {
  Basket.render();
};