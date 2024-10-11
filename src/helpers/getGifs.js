


export const getGifs = async( categorie ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=10&api_key=vhWwZZjJepedkXqDnoV6Hfgx6yb4wv6t`

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( img => {
      return {
        id:img.id,
        title:img.title,
        url:img.images?.downsized.url
      }
    })

    
   return gifs
  }