// import React, { useState } from 'react';

// function Selector(props) {
//     const [selectedOption, setSelectedOption] = useState(props.defaultOption);

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//         console.log(event.target.value)
//     }

// return (
//         <div>
//             <select value={selectedOption} onChange={handleOptionChange} name={props.name} className='selector'>
//                 {props.options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                     {option.label}
//                 </option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// export default Selector;