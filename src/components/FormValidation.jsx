import  { useState } from 'react';

const SimpleFormValidation = () => {
  // State for form inputs and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate username
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Valid email is required';
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission or other actions
      console.log('Form submitted:', formData);
    } else {
      // Form is invalid, do not submit
      console.log('Form validation failed');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='text-center  bg-black text-white'>
      <h2 className='text-4xl p-5 text-yellow-500'> Form Validation</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username" className='p-5'>Username:</label>
          <input
          className=' border m-5 rounded'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <p className="error text-red-500">{formErrors.username}</p>
        </div>

        <div>
          <label htmlFor="email " className='p-5'>Email:</label>
          <input
          className=' border rounded m-5'
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className="error text-red-500">{formErrors.email}</p>
        </div>

        <div>
          <label htmlFor="password" className='p-5'>Password:</label>
          <input
          className=' border m-5 rounded'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <p className="error text-red-500">{formErrors.password}</p>
        </div>

        <button type="submit" className='bg-yellow-500 text-black rounded p-5 m-2'>Submit</button>
      </form>
    </div>
  );
};

export default SimpleFormValidation;
