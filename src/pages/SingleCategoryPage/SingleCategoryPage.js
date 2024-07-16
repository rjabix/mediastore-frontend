import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BigHorizontalProductCard from "../../components/BigHorizontalProductCard/BigHorizontalProductCard";
import {API_URL} from "../../context/ShopContext";

export default function SingleCategoryPage() {
    const { category } = useParams();

    const [filters, setFilterSections] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_URL + '/mediastorefilters/' + category)
            .then(response => response.json())
            .then(data => {
                setFilterSections(data);
            })
            .catch(error => console.error('Error:', error));
    }, [category]);

    useEffect(() => {
        fetch(API_URL + '/mediastoreproduct/' + category)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error:', error));
    }, [category]);

    let filterOptions = {};

    const [formattedFilters, setFormattedFilters] = useState([
        {
            name: 'brand',
            options: ['Apple (1)', 'Samsung (2)']
        }
    ]);

    useEffect(() => {
        if (filters.length === 0) return;

        // Приведення назв фільтрів до нижнього регістру
        const normalizedFilters = filters.map(filter => filter.charAt(0).toLowerCase() + filter.slice(1));

        normalizedFilters.forEach(filter => {
            const optionsCount = products.reduce((acc, product) => {
                if (product[filter]) {
                    acc[product[filter]] = (acc[product[filter]] || 0) + 1;
                }
                return acc;
            }, {});

            filterOptions[filter] = Object.keys(optionsCount).map(option => `${option} (${optionsCount[option]})`);
        });

        setFormattedFilters(normalizedFilters.map(filter => ({
            name: filter,
            options: filterOptions[filter] || []
        })));
    }, [filters, products]);

    return (
        <div>
            <main>
                <ProductList products={products} filters={formattedFilters} />
            </main>
        </div>
    );
}
function FilterItem({ filter, onChange }) {
    if(filter.options.length === 0) return null;
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">{filter.name.charAt(0).toUpperCase() + filter.name.slice(1)}</h3>
            <ul>
                {filter.options.map((option, index) => (
                    <li key={index} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={(e) => onChange(filter.name, e.target.value.slice(0, -4), e.target.checked)}
                            className="mr-2"
                        />
                        <label>{option}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FilterMenu({ filters, onFilterChange }) {
    return (
        <aside className="w-64 p-4 bg-gray-100">
            {filters.map((filter, index) => (
                <FilterItem key={index} filter={filter} onChange={onFilterChange} />
            ))}
        </aside>
    );
}

function ProductList({ products, filters }) {
    const [activeFilters, setActiveFilters] = useState({});

    const handleFilterChange = (filterName, option, isChecked) => {
        setActiveFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (!newFilters[filterName]) {
                newFilters[filterName] = new Set();
            }
            if (isChecked) {
                newFilters[filterName].add(option);
            } else {
                newFilters[filterName].delete(option);
            }
            return newFilters;
        });
    };

    const filteredProducts = products.filter(product => {
        return Object.entries(activeFilters).every(([filterName, filterValues]) => {
            if (!filterValues.size) return true;
            return filterValues.has(product[filterName]);
        });
    });

    return (
        <div className="flex w-full">
            <FilterMenu filters={filters} onFilterChange={handleFilterChange} />
            <div className="flex-grow mx-auto px-4 py-8 w-full">
                <div className="grid grid-cols-1 gap-4 w-full">
                    {filteredProducts.map((product, index) => (
                        <BigHorizontalProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                            link={product.link}
                            specialTags={product.specialTags}
                            oldprice={product.oldprice}
                            reviews={product.reviews}
                            storage={product.storage}
                            display={product.display}
                            connectivity={product.connectivity}
                            color={product.color}
                            brand={product.brand}
                            camera={product.camera}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

