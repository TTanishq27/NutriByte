import React, { useState } from 'react';

function FilteredList() {
  const [notEmpty, setEmpty] = useState(false);
  const [mealCount, setMealCount] = useState(1); // State to hold the number of meals selected
  const [selectedMeals, setSelectedMeals] = useState(Array.from({ length: 1 }, () => '')); // State to hold the selected meals
  const [options, setOptions] = useState(
    [
      "Paneer Tikka Masala",
      "Palak Paneer",
      "Chana Masala",
      "Dal Makhani",
      "Aloo Gobi",
      "Baingan Bharta",
      "Vegetable Biryani",
      "Tandoori Roti",
      "Paneer Butter Masala",
      "Vegetable Korma",
      "Masoor Dal",
      "Samosa",
      "Vegetable Pakoras",
      "Pav Bhaji",
      "Bhindi Masala",
      "Matar Paneer",
      "Aloo Paratha",
      "Gobi Manchurian",
      "Pani Puri",
      "Vegetable Jalfrezi",
      "Chole Bhature",
      "Dosa",
      "Idli Sambar",
      "Veggie Frankie",
      "Vegetable Upma",
      "Vegetable Cutlet",
      "Vegetable Kofta",
      "Vegetable Kebabs",
      "Kadai Paneer",
      "Aloo Tikki",
      "Vegetable Masala Dosa",
      "Mushroom Curry",
      "Paneer Bhurji",
      "Vegetable Seekh Kebab",
      "Vegetable Handi",
      "Tawa Pulao",
      "Dal Tadka",
      "Rajma Masala",
      "Gobi Paratha",
      "Aloo Jeera",
      "Papdi Chaat",
      "Vegetable Samosa",
      "Vegetable Spring Rolls",
      "Dal Fry",
      "Aloo Matar",
      "Chana Chaat",
      "Vegetable Malai Kofta",
      "Palak Aloo",
      "Bhel Puri",
      "Paneer Pakora",
      "Vegetable Tandoori",
      "Vegetable Momos",
      "Paneer Roll",
      "Paneer Paratha",
      "Aloo Palak",
      "Dal Palak",
      "Veg Manchurian",
      "Aloo Baingan",
      "Mushroom Masala",
      "Masala Dosa",
      "Rasam",
      "Vegetable Pulav",
      "Kofta Curry",
      "Gulab Jamun",
      "Puliyogare",
      "Aloo Posto",
      "Dhokla",
      "Aloo Bharta",
      "Poori Bhaji",
      "Poha",
      "Rava Dosa",
      "Baingan Bhaja",
      "Chole Kulche",
      "Khichdi",
      "Sarson Da Saag",
      "Kadhi Pakora",
      "Makki Ki Roti",
      "Matar Kulcha",
      "Misal Pav",
      "Rajma Chawal",
      "Methi Thepla",
      "Vada Pav",
      "Chaat Papdi",
      "Veg Kofta Curry",
      "Masala Vada",
      "Vegetable Kadai",
      "Vegetable Manchurian",
      "Vegetable Masala",
      "Vegetable Palak",
      "Vegetable Sambar",
      "Vegetable Uttapam",
      "Aloo Chaat",
      "Chana Kulcha",
      "Kachori",
      "Baingan Ka Bharta",
      "Besan Chilla",
      "Bhindi Fry",
      "Chana Dal",
      "Dal Bukhara",
      "Gajar Ka Halwa",
      "Gobi Masala",
      "Jeera Rice",
      "Kaju Katli",
      "Malai Kofta",
      "Mango Lassi",
      "Matar Pulao",
      "Navratan Korma",
      "Pakora",
      "Papadum",
      "Puri",
      "Raita",
      "Ras Malai",
      "Samosa Chaat",
      "Shahi Paneer",
      "Tandoori Chicken",
      "Vada",
      "Vegetable Curry",
      "Vegetable Pulao",
      "Veg Fried Rice",
      "Veg Spring Rolls",
      "Veggie Burger",
      "Biryani",
      "Butter Chicken",
      "Chicken Biryani",
      "Chicken Curry",
      "Chicken Tikka Masala",
      "Dahi Vada",
      "Fish Curry",
      "Gajar Halwa",
      "Kadai Chicken",
      "Keema",
      "Kheer",
      "Kulfi",
      "Lamb Curry",
      "Mango Chutney",
      "Mutton Curry",
      "Naan",
      "Pani Puri",
      "Roti",
      "Saag Paneer",
      "Tandoori Chicken",
      "Veg Biryani",
      "Veggie Burger",
      "Butter Naan",
      "Paneer Tikka",
      "Chole Bhature",
      "Masala Dosa",
      "Matar Paneer",
      "Bhel Puri",
      "Rajma Chawal",
      "Puliyogare",
      "Gulab Jamun",
      "Poha",
      "Rava Dosa",
      "Makki Ki Roti",
      "Misal Pav",
      "Vada Pav",
      "Masala Vada",
      "Jeera Rice",
      "Kaju Katli",
      "Pakora",
      "Rasgulla",
      "Shahi Paneer",
      "Tandoori roti"
  ]
  
  );

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const updatedMeals = [...selectedMeals];
    updatedMeals[index] = value;
    setSelectedMeals(updatedMeals);
    setEmpty(value.trim() !== '');
  };

  const handleItemClick = (value, index) => {
    const updatedMeals = [...selectedMeals];
    updatedMeals[index] = value;
    setSelectedMeals(updatedMeals);
    setEmpty(true); 
  };

  const handleMealCountChange = (e) => {
    const count = parseInt(e.target.value);
    setMealCount(count);
    if (count < selectedMeals.length) {
      setSelectedMeals(selectedMeals.slice(0, count));
    } else {
      setSelectedMeals([...selectedMeals, ...Array.from({ length: count - selectedMeals.length }, () => '')]);
    }
  };

  const filteredOptions = (index) => options.filter(option =>
    option.toLowerCase().includes(selectedMeals[index].toLowerCase())
  );

  return (
    <div className='flex flex-col gap-4 w-fit'>
      <div className="">
        <h2>Select Number Of meals: </h2>
        <input 
          type="number" 
          name="" 
          id="" 
          value={mealCount} 
          onChange={handleMealCountChange} 
        />
      </div>
      {[...Array(mealCount)].map((_, index) => (
        <div key={index}>
          <h2>Select Meal {index + 1}: </h2>
          <input
            type="text"
            value={selectedMeals[index]}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Search..."
          />
          {notEmpty && <ul className=''>
            {filteredOptions(index).map((option, optionIndex) => (
              <li className='cursor-pointer py-1' key={optionIndex} onClick={() => handleItemClick(option, index)}>{option}</li>
            ))}
          </ul>}
        </div>
      ))}
      <div>
        <h2>Selected Meals:</h2>
        <ul>
          {selectedMeals.map((meal, index) => (
            <li key={index}>{meal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilteredList;
