import React from 'react'
import { useForm } from 'react-hook-form';
function New() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      // Handle form submission here, e.g., copying values
      console.log(data);
      // Example of copying email value
      navigator.clipboard.writeText(data.email);
      alert(`Copied email: ${data.email}`);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Text:</label>
        <input type="text" {...register('text', { required: true })} />
        {errors.text && <span>This field is required</span>}
  
        <label>Phone Number:</label>
        <input type="tel" {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} />
        {errors.phone && <span>Please enter a valid 10-digit phone number</span>}
  
        <label>Email:</label>
        <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Please enter a valid email address</span>}
  
        <button type="submit">Submit</button>
      </form>
    );
  }
export default New
