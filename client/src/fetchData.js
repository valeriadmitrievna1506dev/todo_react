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
  const result = await axios.post(`${baseUrl}/items`, { text });
};

export const PutDoneTask = async (id, done) => {
  const result = await axios.put(`${baseUrl}/items/${id}`, {
    done: done
  })
  console.log(result);
}
