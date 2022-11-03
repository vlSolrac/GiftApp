export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9iFBIBxonPfDrtWGa9HsZqCyEuYVvpA8&q=${category}&limit=10`;
    let res = await fetch(url);
    let { data } = await res.json();
  
    let gifts = data.map((g) => ({
      id: g.id,
      title: g.title,
      url: g.images.downsized_medium.url,
    }));
  
    return gifts;
  };