
const getGifts = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=B4BlrX9LxjpR8QYGWkpd4VFx2fByhh29&q=${category}&limit=5`
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifts)
    return gifts
}

export default getGifts