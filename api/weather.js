export default async function handler(req, res) {
    const { location } = req.query;
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`;
    
    const response = await fetch(url);
    res.status(200).json(await response.json());
  }