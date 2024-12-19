// import React, { useState } from 'react';

// const DesireBox = () => {
//   const [textValue, setTextValue] = useState('');
//   const [isDisabled, setIsDisabled] = useState(false);

//   const handleSet = () => {
//     setIsDisabled(true); // Disable the textarea
//   };

//   const handleEdit = () => {
//     setIsDisabled(false); // Enable the textarea for editing
//   };

//   const handleClear = () => {
//     setTextValue(''); // Clear the textarea
//     setIsDisabled(false); // Enable the textarea
//   };

//   return (
//     <div className="container">
      
//           <label htmlFor="dziredtext" className="form-label">Enter Text</label>
//           <textarea
//             name="dziredtext"
//             id="dziredtext"
//             className="form-control"
//             value={textValue}
//             onChange={(e) => setTextValue(e.target.value)} // Update state on change
//             disabled={isDisabled} // Disable textarea based on state
//           />
//           <div className="mt-2">
//             <button
//               className="btn btn-sm btn-primary me-2"
//               onClick={handleSet}
//               disabled={!textValue} // Disable if there's no text to set
//             >
//               Set
//             </button>
//             <button
//               className="btn btn-sm btn-warning me-2"
//               onClick={handleEdit}
//               disabled={!isDisabled} // Disable if textarea is already editable
//             >
//               Edit
//             </button>
//             <button
//               className="btn btn-sm btn-danger"
//               onClick={handleClear}
//               disabled={!textValue} // Disable if there's no text to clear
//             >
//               Clear
//             </button>
//           </div>
//         </div>
     
//   );
// };

// export default DesireBox;


import React, { useState } from 'react';

const DesireBox = ({ onSubmit }) => {
  const [textValue, setTextValue] = useState('');

  const handleSet = () => {
    if (textValue.trim()) {
      onSubmit(textValue); // Call the parent component's handler with the text value
      setTextValue(''); // Clear the input after submission
    }
  };

  return (
    <div className="">
      
          <label htmlFor="dziredtext" className="form-label">Enter Custom Text:</label>
          <textarea
            name="dziredtext"
            id="dziredtext"
            className="form-control"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)} // Update state on change
          />
          <button
            className="btn btn-sm btn-primary mt-2"
            onClick={handleSet}
          >
            Set Custom
          </button>
        </div>
      
  );
};

export default DesireBox;
