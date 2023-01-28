
export async function weatherInstant(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c3425ef9bd020696fa52ff8f448fb263&units=metric`);
        const data = await response.json();
        if (response.status === 404){
            throw new Error('Location not found');
        }
        return data;
    }catch(err){
        console.log(err);
    }
}
