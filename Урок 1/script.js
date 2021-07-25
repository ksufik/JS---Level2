const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'ProductName', price = 0) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList; //- goodsList сначала приводится к строке, в массиве эл-ты перечислялись через запятую, и эта запятая тоже стала частью строки.
    //     let listShow = document.querySelector('.goods-list'); - так товары выводятся без запятой
    //     goodsList.forEach(element => {
    //         listShow.insertAdjacentHTML('afterbegin', element);
    //     });
}

renderGoodsList(goods);
