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
_render(){
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
      html += goodItem._render();
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
