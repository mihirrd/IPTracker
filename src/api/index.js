



const fetchData = async ()=>{
    // let newUrl = `${url}${ip}`
    const url = "https://geo.ipify.org/api/v1?apiKey=at_PzHVdj7RtKgtUenDZXRvshAFG2XDU&ipAddress=8.8.8.8"
    
    try {
        const {data: {country, region, city, lat, lng}} = await axios.get(url)
        return {country, region, city, lat, lng}
    } catch (error) {
        console.log("error occured whilte fetching :" + error)
    }
}

export default fetchData