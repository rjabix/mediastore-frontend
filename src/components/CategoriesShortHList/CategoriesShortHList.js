export default function CategoriesShortHList(){
    const products = [
        { name: 'Laptops', image: '/images/static/laptop.png' },
        { name: 'Smartphones', image: '/images/static/iphone15.png' },
        { name: 'Tablets', image: '/images/static/ipad2020.png' },
        { name: 'TVs', image: 'https://via.placeholder.com/100' },
        { name: 'Monitors', image: 'https://via.placeholder.com/100' },
        { name: 'Watches', image: 'https://via.placeholder.com/100' },
        { name: 'VR', image: 'https://via.placeholder.com/100' },
        { name: 'Headphones', image: 'https://via.placeholder.com/100' },
        { name: 'Computer Parts', image: 'https://via.placeholder.com/100' },
        { name: 'Accessories', image: 'https://via.placeholder.com/100' },
    ];

    return (
        <div className="p-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center space-x-8">
                    {products.map((product, index) => (
                        <a href={'/categories/' + product.name.toLowerCase()} key={index} className="text-center">
                            <img src={product.image} alt={product.name}
                                 className="mx-auto mb-2 w-24 h-24 object-contain"
                                style = {{objectFit: "contain", width: "100px", height: "100px"}}/>
                            <p className="text-lg font-medium text-gray-800">{product.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}