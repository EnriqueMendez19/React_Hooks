import type { NextPage } from 'next'
import ProductCard from '../components/ProductCard';
import CategoryTab from '../components/CategoryTab';
import { useStore } from '../hooks/useStore';
import Navbar from '../components/Navbar';
import React from 'react';

const Home: NextPage = () => {
    const {
        currentCategory,
        totalProducts,
        products,
    } = useStore();

    return (
        <div>
            <Navbar />
            <section className="bg-white dark:bg-gray-900 h-screen">
                <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <CategoryTab/>

                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p className="text-gray-500 dark:text-gray-300">{totalProducts} Productos en {currentCategory?.name}</p>
                            </div>

                            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                                {products.map((value, index) => (
                                    <ProductCard
                                        key={index}
                                        product={value}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
