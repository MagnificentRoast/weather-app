// fetch.js information gets passed thorugh this file

class UI {
    constructor() {
        this.uiContainer = document.getElementById('content');
        this.city;
        this.defaultCity = "Phoenix";
    }

    populateUI(data) {
        this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">$(data.name)</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. lows of ${data.main.temp_min}</h6>
                <p class="text-class">Weather conditions are described as: ${data.weather[0].description}</p>

            </div>
        </div>


        `;
    }

    clearUI() {
        this.uiContainer.innerHTML = "";
    }

    saveToLS() {
        localStorage.setItem("city", JSON.stringify(data));
    }

    getFromLS() {
        if (localStorage.getItem("city" == null)) {
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city
    }

    clearLS() {
        localStorage.clear();
    }
}
