import React, { useState, useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

// Replace with your actual API endpoint
const API_URL = "http://localhost:4000/api/v1/createform";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    transactionId: '',
    Eventname: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const submitBtnRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, formData);
      if (response.status === 200) {
        toast.success('Form submitted successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      toast.error('Form submission failed', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="container registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <MDBInput
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <MDBInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <MDBInput
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="transactionId">Transaction Id</label>
          <MDBInput
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Eventname">Eventname</label>
          <MDBInput
            id="Eventname"
            name="Eventname"
            value={formData.Eventname}
            onChange={handleInputChange}
          />
        </div>

        <MDBBtn
          type="submit"
          outline
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #cccccc",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          ref={submitBtnRef}
          onClick={() => (submitBtnRef.current.style.border = "1px solid #000000")}
        >
          Submit
        </MDBBtn>

        {submitMessage && (
          <div className="mt-2">
            {submitMessage}
          </div>
        )}

        <Link to="/">Back to Home</Link>
        <ToastContainer />
      </form>
      <div className="mb-5"></div>
    </div>
  );
}
