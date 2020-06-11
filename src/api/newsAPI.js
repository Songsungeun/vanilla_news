const API_ENDPOINT = `https://api.thecatapi.com/v1/images/search?limit=`

const request = async (url, limit) => {
  try {
    const res = await fetch(url + limit);
    let data = await res.json();
    if (!res.ok) throw data;
    return data;
  } catch (e) {
    throw e;
  }
}

const api = {
  fetchHeadLine: async () => {
    try {
      const headLine = await request(API_ENDPOINT, 5);
      return headLine;
    } catch (e) {
      console.log(e);
    }
  }
}

export { api };