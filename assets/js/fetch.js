// to fetch the weather for the app

class fetch {
    async getCurrent(input) {
        const myKey = "8813efa1ef5769982f3a767b42c081cf"

        //make request to url

        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=$(input)&appid=$(myKey)'
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}