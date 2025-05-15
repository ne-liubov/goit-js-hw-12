import axios from 'axios';

export const getImagesByQuery = async (query, page) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '49208970-c1347c58b4866d3d505700044',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
