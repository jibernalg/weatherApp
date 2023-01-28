export async function weatherWeek(location){
    
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c3425ef9bd020696fa52ff8f448fb263&units=metric`);
        const data = await response.json();
        console.log(data);
        let iconData={};
        let timeData={};
        let tempData={};
        let popData={};
        for (let i=0;i<40;i++){
            iconData[i]=data.list[i].weather[0].icon;
            timeData[i]=new Date(data.list[i].dt*1000).toLocaleDateString("en-US",{
                weekday: 'short', hour:'numeric', hour12: true
            });
            tempData[i]=data.list[i].main.temp;
            popData[i]=data.list[i].pop*100;
        }
        console.log(iconData);
        console.log(timeData);
        console.log(tempData);
        console.log(popData);
        return [timeData,tempData,popData,iconData];
    } catch(error){
        console.log(error);
    }
}







