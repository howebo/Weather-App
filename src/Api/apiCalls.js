const baseURL = 'https://api.weatherapi.com/v1/current.json?key=fab3deb26dd743cb881152639242704';

export const getByCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getByLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}