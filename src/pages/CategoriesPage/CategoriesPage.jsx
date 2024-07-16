import {CategoryProvider} from "../../context/ShopContext";

export default function CategoriesPage() {
    return (
        <CategoryProvider>
            <div>
                <h1>Categories Page</h1>
            </div>
        </CategoryProvider>
    )
}