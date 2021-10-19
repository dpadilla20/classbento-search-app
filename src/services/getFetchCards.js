export const getFetchCards = async ( keyword )  => {
    // const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( keyword ) }&limit=10&api_key=N5HCK1RKEn0gVCa5b37BDsfS5PsVWDXl`;
    // const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${encodeURI(keyword)}`;
    if(!keyword) {
        return [];
    }

    const url = `https://flickr-api-wrapper.corzo.dev/${encodeURI(keyword)}`;

    const resp = await fetch( url );
    const { items } = await resp.json();

    const cards = items.map ( card => {
        return {
            title: card.title,
            link: card.link,
            image: card.media.m,
            author: card.author,
            description: card.description,
            dateTaken: card.date_taken,
            tags: card.tags
            // id: img.id,
            // title: img.title,
            // url: img.images?.downsized_medium.url
        }
    })
    console.log('cards = ', cards);
    return cards;
}