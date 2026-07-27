import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../redux/features/product/productSlice";
import { getProduct } from "../redux/features/product/ProductThunk";
import { getCategory } from "../redux/features/productsCategory/CategoryThunk";

const ProductNavbar = ({ search, setSearch, setCategory, category }) => {

    const [categorySelect, SetCategorySelect] = useState('');

    const categoryName = useSelector(state => state.category.category);


    const [sort, setSort] = useState(0);


    const product = useSelector(state => state.product.product);
    const dispatch = useDispatch();





    const sortHandle = (e) => {
        const { value } = e.target;

        setSort(value);

        if (value == 1) {
            const sortedProducts = [...product].sort((a, b) => a.price - b.price);
            dispatch(setFilterData(sortedProducts));
        }
        if (value == 2) {
            const sortedProducts = [...product].sort((a, b) => b.price - a.price);
            dispatch(setFilterData(sortedProducts));
        };

        if (value == 3) {
            const sortedProducts = [...product].sort((a, b) => a.title.localeCompare(b.title));
            dispatch(setFilterData(sortedProducts));
        };

        if (value == 4) {
            const sortedProducts = [...product].sort((a, b) => b.title.localeCompare(a.title));
            dispatch(setFilterData(sortedProducts));
        };

        if (value == 5) {
            const sortedProducts = [...product].sort((a, b) => b.rating - a.rating);
            dispatch(setFilterData(sortedProducts));
        };

        if (value == 6) {
            const sortedProducts = [...product].sort((a, b) => a.rating - b.rating);
            dispatch(setFilterData(sortedProducts));
        };

    };


    useEffect(() => {
        dispatch(getCategory());
    }, []);









    return (
        <div className="sticky top-16 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                    {/* ===================== */}
                    {/* Search */}
                    {/* ===================== */}

                    <div className="relative w-full lg:w-[70%]">

                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="search"
                            required
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className=" h-14 w-full rounded-2xl border  border-white/10  bg-white/5 pl-14 pr-5  text-white  placeholder:text-slate-400 outline-none transition-all duration-300  focus:border-indigo-500 focus:ring-4  focus:ring-indigo-500/20"
                        />

                    </div>

                    {/* ===================== */}
                    {/* Filters */}
                    {/* ===================== */}

                    <div className="flex w-full gap-4 lg:w-[30%]">

                        {/* Category */}
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className=" h-14 flex-1 rounded-2xl border  border-white/10  bg-white/5 px-4  text-white outline-none transition duration-300  hover:border-indigo-500  focus:border-indigo-500">
                            <option className="bg-slate-900" value="" >All Categories</option>
                            {categoryName?.map(value => <option value={value.slug} key={value.slug} className="bg-slate-900">{value.name}</option>)}
                        </select>






                        {/* Sorting */}

                        <select
                            value={sort}

                            onChange={sortHandle}
                            className=" h-14 flex-1 rounded-2xl border  border-white/10  bg-white/5 px-4  text-white outline-none transition duration-300  hover:border-pink-500  focus:border-pink-500" >

                            <option value={0} className="bg-slate-900">
                                Sort By
                            </option>

                            <option value={1} className="bg-slate-900">
                                Price: Low → High
                            </option>

                            <option value={2} className="bg-slate-900">
                                Price: High → Low
                            </option>
                            <option value={3} className="bg-slate-900">
                                A → Z
                            </option>
                            <option value={4} className="bg-slate-900">
                                Z → A
                            </option>
                            <option value={5} className="bg-slate-900">
                                Highest Rating
                            </option>
                            <option value={6} className="bg-slate-900">
                                Lowest Rating
                            </option>
                        </select>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductNavbar;