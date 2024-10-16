import axios from '../../../Config/axios';
import React from 'react'
import { saveUser } from '../../Reducers/UserReducer/userSlice';
import { useNavigate } from 'react-router-dom';

export const asyncsignup = (formData) => async (dispatch, getState) => {
    try {
        const response = await axios.post('/api/user/register', formData); // Adjust the endpoint as needed
        dispatch(saveUser(response.data.user)); // Dispatch action to save user in state
        return response.data.user;
      } catch (error) {
        console.error(error);
        alert('Error during registration');
      }
   }
