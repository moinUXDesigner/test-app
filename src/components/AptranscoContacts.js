import React, { useState } from 'react';
import transcodata from '../data/aptransco_data.json';
import CardCorner from '../assets/images/CardCorner.png';

const AptranscoContacts = () => {
  const [view, setView] = useState('card'); // State to manage view type
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filtered contacts based on search term
//   const filteredContacts = transcodata.filter((contact) => {
//     const searchValue = searchTerm.toLowerCase();
//     return (
//       contact.Name.toLowerCase().includes(searchValue) ||
//       contact.Designation.toLowerCase().includes(searchValue) ||
//       contact.department.toLowerCase().includes(searchValue) ||
//       contact.Mobile.toLowerCase().includes(searchValue) ||
//       contact.Extension.toLowerCase().includes(searchValue) ||
//       contact.Landline.toLowerCase().includes(searchValue) ||
//       contact.Email.toLowerCase().includes(searchValue)
//     );
//   });

const filteredContacts = transcodata.filter((contact) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      (contact.Name?.toLowerCase() || '').includes(searchValue) ||
      (contact.Designation?.toLowerCase() || '').includes(searchValue) ||
      (contact.department?.toLowerCase() || '').includes(searchValue) ||
      (contact.Mobile?.toLowerCase() || '').includes(searchValue) ||
      (contact.Extension?.toLowerCase() || '').includes(searchValue) ||
      (contact.Landline?.toLowerCase() || '').includes(searchValue) ||
      (contact.Email?.toLowerCase() || '').includes(searchValue)
    );
  });
  

  return (
    <div className="container-fluid">
      {/* View Switcher and Search */}
      <div className="d-flex justify-content-between align-items-center sticky-top">
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
                  <h6 className="mb-0">{contact.Name}</h6>
                  <p className="mb-0">{contact.Designation}</p>
                  <p className="mb-0">Extension: <strong>{contact.Extension}</strong></p>
                  <p className="mb-0">Mobile: <strong>{contact.Mobile}</strong></p>
                  <p className="mb-0">Landline: <strong>{contact.Landline}</strong></p>
                  <p className="mb-0">Email: <strong>{contact.Email}</strong></p>
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
                <th>Mobile</th>
                <th>Extension</th>
                <th>Landline</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.id}</td>
                  <td>{contact.Name}</td>
                  <td>{contact.Designation}</td>
                  <td>{contact.Mobile}</td>
                  <td>{contact.Extension}</td>
                  <td>{contact.Landline}</td>
                  <td>{contact.Email}</td>
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

export default AptranscoContacts;
