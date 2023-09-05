// script.js

document.addEventListener("DOMContentLoaded", function () {
    const flightSearchForm = document.getElementById("flightSearchForm");
    const resultsDiv = document.getElementById("results");

    flightSearchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const origin = document.getElementById("origin").value;
        const destination = document.getElementById("destination").value;
        const departureDate = document.getElementById("departureDate").value;
        const returnDate = document.getElementById("returnDate").value;
        const currentDate = new Date();

        // Check if the departure date is in the past
        const selectedDepartureDate = new Date(departureDate);
        if (selectedDepartureDate < currentDate) {
            resultsDiv.innerHTML = "<p>Error: Departure date cannot be in the past.</p>";
            return;
        }

        // Check if the origin and destination match specific values
        if (origin === "Bucuresti - Otopeni" && destination === "London - Heathrow") {
            // Display mock flight data
            resultsDiv.innerHTML = `
            <div id="results">
            <!-- Updated "Available Flights" section -->
            <div class="flight-results">
                <h2>Available Flights</h2>
                <div class="flight-info">
                    <div class="flight-details">
                        <p class="route">From: Bucuresti - Otopeni</p>
                        <p class="route">To: London - Heathrow</p>
                    </div>
                    <ul class="flight-list">
                        <li>
                            <span class="flight-number">Flight 1 </span>
                            <span class="flight-price">$300</span>
                        </li>
                        <li>
                            <span class="flight-number">Flight 2 </span>
                            <span class="flight-price">$350</span>
                        </li>
                        <li>
                            <span class="flight-number">Flight 3 </span>
                            <span class="flight-price">$400</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            `;
        } else {
            resultsDiv.innerHTML = "<p>No real flight data available in this demo.</p>";
        }
    });
});
