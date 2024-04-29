import axios from 'axios';
import React from 'react'

function test() {

    const [data, setData] = React.useState();
    React.useEffect(() => {
        const fetchData = async (query) => {
        var query = 'pasta';
          try {
            const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
              headers: {
                'X-Api-Key': 'vUoq5AUZObTtwVcr9H3ljA==3ctcsriSz64KOM4q'
              }
            });
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
      }, []);
    
    
    return (
        <div className='w-[20rem] p-2 rounded-lg overflow-hidden flex flex-col justify-between h-full border-2 bg-white border-[#12372a]'>
            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" className='h-48 w-full object-cover rounded-lg' />
            <div className='flex items-center py-2 gap-5 flex-wrap'>
                <h1 className='text-black text-2xl font-medium'>
                    {data[0] && data[0].name}
                </h1>
                <i className='fa-solid fa-star text-white cursor-pointer'></i>
            </div>
            <ul className='flex gap-2 flex-wrap'>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Bread</li>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Cheese</li>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Garlic</li>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Ketchup</li>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Cucumber</li>
                <li className='py-2 px-4 rounded-xl bg-indigo-200 text-sm'>Patty</li>
            </ul>
            <div className="">
                <h2 className='text-black font-medium py-3 text-center text-xl'>Nutritions</h2>
                <ul className='text-black'>
                    <li>Proteins: {data[0] && data[0].protein_g}</li>
                    <li>Calories: {data[0] && data[0].calories}</li>
                    <li>Fats: {data[0] && data[0].fat_total_g}</li>
                    <li>Carbohydrates: {data[0] && data[0].carbohydrates_total_g}</li>
                    <li>Fibres: {data[0] && data[0].fiber_g}</li>
                </ul>
            </div>
            <button className='bg-indigo-600 py-2 px-4 rounded-md mt-4 text-white hover:bg-indigo-700'>Get Recipe
                <i className="fa-solid fa-arrow-right -rotate-45 ml-1"></i>
            </button>
        </div>
    )
}

export default test