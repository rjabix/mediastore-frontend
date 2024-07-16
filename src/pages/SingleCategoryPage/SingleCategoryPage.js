import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BigHorizontalProductCard from "../../components/BigHorizontalProductCard/BigHorizontalProductCard";
import {API_URL} from "../../context/ShopContext";
import './SingleCategoryPage.css';

export default function SingleCategoryPage() {
    const {category} = useParams();

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

    const [formattedFilters, setFormattedFilters] = useState(/*[
        {
            name: 'brand',
            options: ['Apple (1)', 'Samsung (2)']
        }
    ]*/);

    useEffect(() => {
        if (filters.length === 0 || products.length === 0) return;

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
    }, [filterOptions, filters, products]);

    return (
        <div>
            <main>
                <ProductList products={products} filters={formattedFilters}/>
            </main>
        </div>
    );
}

function FilterItem({filter, onChange}) {
    if (filter.options.length === 0) return null;
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">{filter.name.charAt(0).toUpperCase() + filter.name.slice(1)}</h3>
            <ul>
                {filter.options.map((option, index) => {
                    const [label, count] = option.split(" (");
                    const id = `check-23-${filter.name}-${index}`; // Include the filter name in the id
                    return (
                        <li key={index} className="flex items-center mb-1">
                            <label htmlFor={id} className="flex justify-between w-full">
                                <div className="checkbox-wrapper-23 items-center" style={{alignContent: "center"}}>
                                    <input type="checkbox" id={id}
                                           onChange={(e) => onChange(filter.name, label, e.target.checked)}/>
                                    <label htmlFor={id}>
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </label>
                                </div>
                                <span style={{
                                    marginLeft: "10px", // Add left margin here
                                    alignContent: "center"
                                }}>{label}</span>
                                <span style={{
                                    color: "gray",
                                    fontSize: "0.875rem",
                                    marginLeft: "auto",
                                    alignContent: "center"
                                }}>({count}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function FilterMenu({filters, onFilterChange}) {
    return (
        <aside className="w-64 p-4 bg-gray-100">
            {filters !== undefined && filters.map((filter, index) => (
                <FilterItem key={index} filter={filter} onChange={onFilterChange}/>
            ))}
        </aside>
    );
}

function ProductList({products, filters}) {
    const [activeFilters, setActiveFilters] = useState({});

    const handleFilterChange = (filterName, option, isChecked) => {
        setActiveFilters(prevFilters => {
            const newFilters = {...prevFilters};
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
            <FilterMenu filters={filters} onFilterChange={handleFilterChange}/>
            <div className="flex-grow mx-auto px-4 py-8 w-full">
                <div className="grid grid-cols-1 gap-4 w-full">
                    {filteredProducts.length !== 0 && filteredProducts.map((product, index) => (
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


