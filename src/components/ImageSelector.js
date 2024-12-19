// import React, { useState } from 'react';
// import DesireBox from './DesireBox';

// const ImageSelector = () => {
//   const [selectedOption, setSelectedOption] = useState('0'); // Default to option 0
//   const [customText, setCustomText] = useState(''); // State to hold custom text from DesireBox

//   // Mapping options to image URLs
//   const images = {
//     '0': 'https://via.placeholder.com/400x150?text=Image+0',
//     '1': 'https://via.placeholder.com/400x150?text=Image+1',
//     '2': 'https://via.placeholder.com/400x150?text=Image+2',
//     '3': 'https://via.placeholder.com/400x150?text=Image+3',
//     '4': 'https://via.placeholder.com/400x150?text=Image+4',
//   };

//   const handleCustomTextSubmit = (text) => {
//     setCustomText(text); // Update custom text
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-12">
//           <label htmlFor="imageSelect" className="form-label">Select an Option:</label>
//           <select
//             id="imageSelect"
//             className="form-select"
//             value={selectedOption}
//             onChange={(e) => setSelectedOption(e.target.value)} // Update the selected option
//           >
//             <option value="0">Option 0</option>
//             <option value="1">Option 1</option>
//             <option value="2">Option 2</option>
//             <option value="3">Option 3</option>
//             <option value="4">Option 4</option>
//             <option value="5">Custom</option>
//           </select>
//         </div>
//         {selectedOption === '5' && (
//           <div className="col-sm-12 mt-4">
//             <DesireBox onSubmit={handleCustomTextSubmit} />
//           </div>
//         )}
//         <div className="col-sm-12 text-center mt-3">
//           {selectedOption === '5' && customText ? (
//             <div className="custom-image p-4 border">
//               <h5>{customText}</h5>
//             </div>
//           ) : (
//             selectedOption !== '5' && (
//               <img
//                 src={images[selectedOption]} // Display image based on selected option
//                 alt={`Selected Option ${selectedOption}`}
//                 className="img-fluid"
//               />
//             )
//           )}
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default ImageSelector;


import React, { useState } from 'react';
import DesireBox from './DesireBox';

const ImageSelector = () => {
  const [selectedOption, setSelectedOption] = useState('0'); // Default to option 0
  const [customText, setCustomText] = useState(''); // State to hold custom text from DesireBox

  // Mapping options to image URLs
  const images = {
    '0': 'https://via.placeholder.com/400x150?text=Image+0',
    '1': 'https://via.placeholder.com/400x150?text=Image+1',
    '2': 'https://via.placeholder.com/400x150?text=Image+2',
    '3': 'https://via.placeholder.com/400x150?text=Image+3',
    '4': 'https://via.placeholder.com/400x150?text=Image+4',
  };

  const handleCustomTextSubmit = (text) => {
    setCustomText(text); // Update custom text
  };

  const handleClear = () => {
    setCustomText(''); // Clear the custom text
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <label htmlFor="imageSelect" className="form-label">Select an Option or select custom:</label>
          <select
            id="imageSelect"
            className="form-select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)} // Update the selected option
          >
            <option value="0">Option 0</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Custom</option>
          </select>
        </div>
        {selectedOption === '5' && (
          <div className="col-sm-12 mt-4">
            <DesireBox onSubmit={handleCustomTextSubmit} />
          </div>
        )}
        <div className="col-sm-12 text-center mt-3">
          {selectedOption === '5' && customText ? (
            <div className="card custom-image p-4 border">
              <h5>{customText}</h5>
              <button
                className="btn btn-sm btn-warning fw-semibold mt-2 mb-0"
                onClick={handleClear} // Clear button functionality
              >
                Clear
              </button>
            </div>
          ) : (
            selectedOption !== '5' && (
              <img
                src={images[selectedOption]} // Display image based on selected option
                alt={`Selected Option ${selectedOption}`}
                className="img-fluid"
              />
            )
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ImageSelector;
