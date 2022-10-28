import React, { FC, useEffect } from 'react';
import { useStore } from '../hooks/useStore';

const CategoryTab: FC = () => {
    const {categories, changeCategory} = useStore();

    useEffect(() => {
        changeCategory(categories[0])
    }, [])

    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">

            {categories.map((value, index) => (
                <button
                    key={index}
                    className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                    onClick={() => changeCategory(value)}
                >
                    {value.name}
                </button>
            ))}

        </div>
    )
}

export default CategoryTab;
