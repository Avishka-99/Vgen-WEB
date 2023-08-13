import React,{useEffect,useState} from 'react';
import StaffRegistrationForm from './staffregisterform';


export default function Staff() {
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistrationForm = () => {
    setIsRegistrationOpen(true);
  };

  const closeRegistrationForm = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div>
      <h1>Staff</h1>
      <h1>staffRegister</h1>
      <button onClick={openRegistrationForm}>Register Staff</button>

      {isRegistrationOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeRegistrationForm}>
              &times;
            </span>
            <StaffRegistrationForm onClose={closeRegistrationForm} />
          </div>
        </div>
      )}
    </div>
  );
}
