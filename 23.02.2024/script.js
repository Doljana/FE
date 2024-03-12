class ProductList {
    constructor(products) {
        this.products = products;
    }

    getSumPrice() {
        const sum = this.products.reduce((acc, product) => acc + product.price, 0);
        console.log("Итоговая сумма стоимости всех товаров:", sum);
    }

    getAvgPrice() {
        const sum = this.products.reduce((acc, product) => acc + product.price, 0);
        const avg = sum / this.products.length;
        console.log("Среднее значение суммы среди всех товаров:", avg);
    }

    setPercentage() {
        this.products.forEach(product => {
            const percentage = Math.round((product.discount_price / product.price) * 100);
            product.percentage = percentage;
        });
    }

    getExpensiveProduct() {
        const expensiveProduct = this.products.reduce((prev, current) => prev.price > current.price ? prev : current);
        console.log("Самый дорогой товар:", expensiveProduct);
    }
}


const products = [
    {id: 1, title: 'Велосипед', price: 5000, discount_price: 800},
    {id: 2, title: 'Cамокат', price: 3000, discount_price: 2400},
    {id: 3, title: 'Ракетки', price: 500, discount_price: 250},
    {id: 4, title: 'Телевизор', price: 12000, discount_price: 11500}
];

const productList = new ProductList(products);

productList.getSumPrice();
productList.getAvgPrice();
productList.setPercentage();
productList.getExpensiveProduct();
