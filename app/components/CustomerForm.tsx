"use client";

import { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    dateOfBirth: '',
    maritalStatus: '',
    serviceOfInterest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6 rounded-lg shadow-lg space-y-4 bg-[#F5F5F5]">
      <h3 className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-6 text-center">Contact Us</h3>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="firstName" className="text-gray-700 font-medium">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          />
        </div>
        <div className="flex flex-col flex-1 mt-4 md:mt-0">
          <label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          />
        </div>
        <div className="flex flex-col flex-1 mt-4 md:mt-0">
          <label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="country" className="text-gray-700 font-medium">Country of Residence</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          >
            <option value="">Select a country</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <div className="flex flex-col flex-1 mt-4 md:mt-0">
          <label htmlFor="dateOfBirth" className="text-gray-700 font-medium">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="maritalStatus" className="text-gray-700 font-medium">Marital Status</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          >
            <option value="">Select a marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="flex flex-col flex-1 mt-4 md:mt-0">
          <label htmlFor="serviceOfInterest" className="text-gray-700 font-medium">Service of Interest</label>
          <select
            id="serviceOfInterest"
            name="serviceOfInterest"
            value={formData.serviceOfInterest}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
          >
            <option value="">Select a service</option>
            <option value="citizenship">Citizenship</option>
            <option value="express">Express Entry</option>
            <option value="family">Family Class Sponsorship</option>
            <option value="provincial">Provincial Nominee Program</option>
            <option value="study">Study Permit</option>
            <option value="work">Work Permit</option>
            <option value="investors">Investors and Business</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="py-3 px-6 bg-[#D32F2F] text-white rounded-md shadow hover:bg-[#B71C1C] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:ring-offset-2 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;
