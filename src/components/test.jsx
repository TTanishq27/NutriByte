import axios from 'axios';
import React from 'react'

function test({ name }) {

    const [data, setData] = React.useState({});
    const s = async () => {
        const something = await axios.get(`http://localhost:8000/${name}`);
        setData(await something.data);
    }
    s();
    
    return (
        <div className='w-[20rem] p-2 rounded-lg overflow-hidden flex flex-col gap-2 border-2 border-[#12372a]'>
            {/* <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" className='h-48 w-full object-cover rounded-lg' /> */}
            <div className='flex items-center py-2 gap-5 flex-wrap'>
                <h1 className='text-black text-2xl font-medium'>
                    {data[0] && data[0].name}
                </h1>
                <i className='fa-solid fa-star text-white cursor-pointer'></i>
            </div>
            {/* <ul className='list-none flex flex-wrap gap-3 justify-center '>
                <li className='bg-indigo-200 p-1 rounded-md'>{data[0] && data[0].fiber_g}</li>
                <li className='bg-indigo-200 p-1 rounded-md'>{data[0] && data[0].protein_g}</li>
                <li className='bg-indigo-200 p-1 rounded-md'>{data[0] && data[0].calories}</li>
                <li className='bg-indigo-200 p-1 rounded-md'>{data[0] && data[0].fat_total_g}</li>
            </ul> */}
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