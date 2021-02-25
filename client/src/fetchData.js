import axios from 'axios';
import { baseUrl } from './index';

export const fetchData = async (order = 'normal', done = 'all') => {
  try {
    let queryString = {
      order: order,
    };
    if (done != 'all') queryString.done = done;

    const result = await axios.get(
      `${baseUrl}/items?` + new URLSearchParams(queryString),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      }
    );
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const AddTask = async (text) => {
  try {
    const result = await axios.post(`${baseUrl}/items`, { text });
  } catch (err) {
    console.log(err.message);
  }
};

export const PutDoneTask = async (id, done) => {
  try {
    const result = await axios.put(`${baseUrl}/items/${id}`, {
      done: done,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const editTaskText = async (id, text) => {
  try {
    const result = await axios.put(`${baseUrl}/items/${id}`, {
      text: text,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const DeleteTask = async (id) => {
  try {
    const result = await axios.delete(`${baseUrl}/items/${id}`)
  } catch (error) {
    console.log(error.message);
  }
}