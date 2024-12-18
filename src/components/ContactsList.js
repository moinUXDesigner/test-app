// import React from 'react';
// import contacts from '../data/contacts.json';

// const ContactsList = () => {
//   return (
//     <div className="container-fluid">
//     <div className='row mt-3'>
//       {contacts.map(contact => (
//         <div className="col-sm-3" style={{fontSize: '0.8rem'}}>
//             <div className="card">
//         <div className='card-body' key={contact.id} >
//           <h6 className='mb-0'>{contact.name}</h6>
//           <p className='mb-0'>{contact.designation} - {contact.department}</p>
//           <p className='mb-0'>{contact.zone} > {contact.circle} > {contact.division}</p>
//           <p className='mb-0'>Email: <strong> {contact.contact.email}</strong></p>
//           <p className='mb-0'>Phone: <strong>{contact.contact.phone}</strong></p>
//         </div></div>
//         </div>
//       ))}
//     </div></div>
//   );
// };

// export default ContactsList;

// =============================================================================== Table and Grid ============================

// import React, { useState } from 'react';
// import contacts from '../data/contacts.json';

// const ContactsList = () => {
//   const [view, setView] = useState('card'); // State to manage view type

//   return (
//     <div className="container-fluid">
//       {/* View Switcher */}
//       <div className="d-flex justify-content-between align-items-center mt-3">
//         <h4>Contacts</h4>
//         <div>
//           <button
//             className={`btn btn-sm ${view === 'card' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
//             onClick={() => setView('card')}
//           >
//             <i className="bi bi-grid"></i>
//           </button>
//           <button
//             className={`btn btn-sm ${view === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
//             onClick={() => setView('table')}
//           >
//             <i className="bi bi-list"></i>
//           </button>
//         </div>
//       </div>

//       {/* Card View */}
//       {view === 'card' && (
//         <div className="row mt-3">
//           {contacts.map((contact) => (
//             <div className="col-sm-3 font-sm" key={contact.id}>
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <h6 className="mb-0">{contact.name}</h6>
//                   <p className="mb-0">{contact.designation} - {contact.department}</p>
//                   <p className="mb-0">{contact.zone} > {contact.circle} > {contact.division}</p>
//                   <p className="mb-0">Email: <strong>{contact.contact.email}</strong></p>
//                   <p className="mb-0">Phone: <strong>{contact.contact.phone}</strong></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Table View */}
//       {view === 'table' && (
//         <div className="table-responsive mt-3">
//           <table className="table table-bordered table-hover font-sm">
//             <thead className="table-primary">
//               <tr>
//                 <th>Name</th>
//                 <th>Designation</th>
//                 <th>Department</th>
//                 <th>Zone</th>
//                 <th>Circle</th>
//                 <th>Division</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact) => (
//                 <tr key={contact.id}>
//                   <td>{contact.name}</td>
//                   <td>{contact.designation}</td>
//                   <td>{contact.department}</td>
//                   <td>{contact.zone}</td>
//                   <td>{contact.circle}</td>
//                   <td>{contact.division}</td>
//                   <td>{contact.contact.email}</td>
//                   <td>{contact.contact.phone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactsList;

// ================================================ Table & Grid with search functionality ===========================

import React, { useState } from 'react';
import contacts from '../data/contacts.json';
import CardCorner from '../assets/images/CardCorner.png';

const ContactsList = () => {
  const [view, setView] = useState('card'); // State to manage view type
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filtered contacts based on search term
  const filteredContacts = contacts.filter((contact) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(searchValue) ||
      contact.designation.toLowerCase().includes(searchValue) ||
      contact.department.toLowerCase().includes(searchValue) ||
      contact.zone.toLowerCase().includes(searchValue) ||
      contact.circle.toLowerCase().includes(searchValue) ||
      contact.division.toLowerCase().includes(searchValue) ||
      contact.contact.email.toLowerCase().includes(searchValue) ||
      contact.contact.phone.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="container-fluid">
      {/* View Switcher and Search */}
      <div className="d-flex justify-content-between align-items-center" style={{position: 'absolute', top: 30}}>
        <h4>Contacts</h4>
        <div>
          <input
            type="text"
            className="form-control form-control-sm d-inline-block me-3"
            style={{ width: '200px' }}
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className={`btn btn-sm ${view === 'card' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
            onClick={() => setView('card')}
          >
            <i className="bi bi-grid"></i>
          </button>
          <button
            className={`btn btn-sm ${view === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setView('table')}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Card View */}
      {view === 'card' && (
        <div className="row mt-3">
          {filteredContacts.map((contact) => (
            <div className="col-sm-3" style={{ fontSize: '0.8rem' }} key={contact.id}>
              <div className="card mb-2">
                <img src={CardCorner} alt="cardcorner" className='position-absolute top-0 end-0 img-fluid h-100' width={'30%'} />
                <div className="card-body">
                  <h6 className="mb-0">{contact.name}</h6>
                  <p className="mb-0">{contact.designation} - {contact.department}</p>
                  <p className="mb-0">{contact.zone}  {contact.circle}  {contact.division}</p>
                  <p className="mb-0">Email: <strong>{contact.contact.email}</strong></p>
                  <p className="mb-0">Phone: <strong>{contact.contact.phone}</strong></p>
                </div>
              </div>
            </div>
          ))}
          {filteredContacts.length === 0 && (
            <p className="text-center mt-3">No contacts found.</p>
          )}
        </div>
      )}

      {/* Table View */}
      {view === 'table' && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Zone</th>
                <th>Circle</th>
                <th>Division</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.designation}</td>
                  <td>{contact.department}</td>
                  <td>{contact.zone}</td>
                  <td>{contact.circle}</td>
                  <td>{contact.division}</td>
                  <td>{contact.contact.email}</td>
                  <td>{contact.contact.phone}</td>
                </tr>
              ))}
              {filteredContacts.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center">No contacts found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactsList;

