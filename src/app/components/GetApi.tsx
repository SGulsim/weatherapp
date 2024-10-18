const gettingApi = async () => {
    const API_KEY = '3445dc0548728d48c3bd82bbb3ecb3cc';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

export default gettingApi;
