import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BigHorizontalProductCard from "../../components/BigHorizontalProductCard/BigHorizontalProductCard";
import { API_URL } from "../../context/ShopContext";
import './SingleCategoryPage.css';

export default function SingleCategoryPage() {
    const { category } = useParams();

    const [filters, setFilterSections] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        //fetching category info
        fetch(API_URL + '/mediastorefilters/' + category, { signal })
            .then(response => response.json())
            .then(data => {
                setFilterSections(data);
            })
            .catch(error => console.error('Error:', error));

        //fetching products
        fetch(API_URL + '/mediastoreproduct/' + category, { signal })
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error:', error));

        return () => abortController.abort();

    }, [category]);

    const [formattedFilters, setFormattedFilters] = useState([]);

    useEffect(() => {
        if (filters.length === 0 || products.length === 0) return;

        let filterOptions = {};
        const normalizedFilters = filters.map(filter => filter.charAt(0).toLowerCase() + filter.slice(1));

        normalizedFilters.forEach(filter => {
            const optionsCount = products.reduce((acc, product) => {
                if (Array.isArray(product[filter])) {
                    product[filter].forEach(elem => {
                        acc[elem] = (acc[elem] || 0) + 1;
                    });
                } else if (product[filter]) {
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

    const productInfoToDisplay = GetInfoToDisplay(category);

    return (
        <div>
            <main>
                <ProductList products={products} filters={formattedFilters}
                             productInfoToDisplay={productInfoToDisplay} category={category} />
            </main>
        </div>
    );
}

function FilterItem({ filter, onChange, productInfoToDisplay }) {
    if (filter.options.length === 0) return null;
    const matchingObject = productInfoToDisplay.find(obj => obj.property === filter.name.replace(/\s/g, ''));
    const labelInfoToDisplay = matchingObject ? matchingObject.label : (filter.name.charAt(0).toUpperCase() + filter.name.slice(1));

    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">{labelInfoToDisplay}</h3>
            <ul>
                {filter.options.map((option, index) => {
                    const [label, count] = option.split(" (");
                    const id = `check-23-${filter.name}-${index}`; // Include the filter name in the id
                    return (
                        <li key={index} className="flex items-center mb-1">
                            <label htmlFor={id} className="flex justify-between w-full">
                                <div className="checkbox-wrapper-23 items-center" style={{ alignContent: "center" }}>
                                    <input type="checkbox" id={id}
                                           onChange={(e) => onChange(filter.name, label, e.target.checked)} />
                                    <label htmlFor={id}>
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </label>
                                </div>
                                <span style={{
                                    marginLeft: "10px",
                                    alignContent: "center",
                                    cursor: "pointer"
                                }}>{!(typeof label === 'string' && label.startsWith('"') && label.endsWith('"')) ? label : label.substring(1, label.length - 1)}</span> {/* Remove quotes from string */}
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

function FilterMenu({ filters, onFilterChange, productInfoToDisplay }) {
    return (
        <aside className="w-64 p-4 bg-gray-100">
            {filters !== undefined && filters.map((filter, index) => (
                <FilterItem key={index} filter={filter} onChange={onFilterChange}
                            productInfoToDisplay={productInfoToDisplay} />
            ))}
        </aside>
    );
}

function ProductList({ products, filters, productInfoToDisplay, category }) {
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

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products.filter(product => {
            return Object.entries(activeFilters).every(([filterName, filterValues]) => {
                if (!filterValues.size) return true;
                if (Array.isArray(product[filterName])) {
                    return [...filterValues].every(value => product[filterName].includes(value));
                }
                return filterValues.has(String(product[filterName]));
            });
        }));
    }, [activeFilters, products]);


    return (
        <div className="flex w-full">
            <FilterMenu filters={filters} onFilterChange={handleFilterChange}
                        productInfoToDisplay={productInfoToDisplay} />
            <div className="flex-grow mx-auto px-4 py-8 w-full">
                <div className="grid grid-cols-1 gap-4 w-full">
                    {filteredProducts.map((product, index) => {
                        const productProps = productInfoToDisplay.map(info => {
                            return { ...info, property: product[info.property] };
                        });

                        return (
                            <BigHorizontalProductCard
                                key={index}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                                id={product.id}
                                category={category}
                                specialTags={product.specialTags}
                                oldprice={product.oldprice}
                                reviews={product.reviews}
                                info1={productProps[0]}
                                info2={productProps[1]}
                                info3={productProps[2]}
                                info4={productProps[3]}
                                info5={productProps[4]}
                                info6={productProps[5]}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function GetInfoToDisplay(category) {
    switch (category) {
        // label, property
        case 'smartphones':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        case 'tablets':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        case 'laptops':
            return [
                { label: 'Storage Type', property: 'storageType' },
                { label: 'Storage Size', property: 'storageSize' },
                { label: 'Ports', property: 'ports' },
                { label: 'Screen Size', property: 'screenSize' },
                { label: 'Screen Resolution', property: 'resolution' },
                { label: 'Display Type', property: 'display' }
            ];
        case 'smartwatches':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        case 'headphones':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        case 'cameras':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        case 'accessories':
            return [
                { label: 'Storage', property: 'storage' },
                { label: 'Display', property: 'display' },
                { label: 'Ports', property: 'connectivity' },
                { label: 'Color', property: 'color' },
                { label: 'Brand', property: 'brand' },
                { label: 'Camera', property: 'camera' }
            ];
        default:
            return [];
    }
}
