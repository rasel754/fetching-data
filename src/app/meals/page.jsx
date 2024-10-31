
import Meals from '@/components/Meals';
import React from 'react';
export const metadata = {
    title: "Home | page  ",
    description: "here you find the homepage",
  };

const mealsPage = () => {
    return (
        <div>
            <h1 className='font-semibold text-red-600 text-3xl'>choose your meal ......</h1>
            <p>choose meal of you choice by searching ........</p>
            <Meals></Meals>
        </div>
    );
};

export default mealsPage;