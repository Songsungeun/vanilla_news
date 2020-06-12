const API_KEY = 'e8f171634dd847ecb841c221cab41a33';
const API_ENDPOINT = `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`


const request = async (url, limit) => {
  try {
    const res = await fetch(`${API_ENDPOINT}&pageSize=${limit}`, {
      method: 'GET',
      mode: 'cors'
    });
    let data = await res.json();
    console.log(data);
    if (!res.ok) throw data;
    return data;
  } catch (e) {
    throw e;
  }
}

const api = {
  fetchHeadLine: async (limit = 20) => {
    try {
      const headLine = await request(API_ENDPOINT, limit);
      return headLine;
    } catch (e) {
      console.log(e);
    }
  }
}

export { api };
