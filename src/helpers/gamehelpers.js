import axios from 'axios';

export async function getRooms() {
  let data;
  await axios
    .get(`${process.env.REACT_APP_API_URL}/adv/rooms`)
    .then(res => {
      data = res.data.rooms;
    })
    .catch(err => {
      data = err;
    });

  return data;
}
