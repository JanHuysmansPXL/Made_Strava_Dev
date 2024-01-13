// TEST PROGRESS BAR SCRIPT (ZIE CHATGPT

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and update fundraising data
    function fetchAndUpdateData() {
        // Get the progress fill element
        var progressFill = document.getElementById("progress-fill");

        // Fetch fundraising data from the website
        fetch('https://www.komoptegenkanker.be/de-100km-run/steun-een-team/89fa60a8-e691-4bf2-9c25-5b987f92879e')
            .then(response => response.text())
            .then(html => {
                // Create a temporary div element to parse the HTML
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Extract the fundraising amount using DOM manipulation
                var raisedAmount = tempDiv.querySelector('.team-page__funds .amount').textContent.trim();
                console.log(raisedAmount);

                // Update the fundraising amount on the page
                document.getElementById("raisedAmount").textContent = raisedAmount;
                console.log(raisedAmount);

                // Set the initial width based on the updated funds raised and the goal
                var parsedAmount = parseFloat(raisedAmount.replace('€', '').replace(',', ''));
                var goalAmount = parseFloat(document.getElementById("goalAmount").textContent);
                var progressWidth = (parsedAmount / goalAmount) * 100;
                progressFill.style.width = progressWidth + "%";
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Fetch data initially
    fetchAndUpdateData();

    // Schedule a periodic fetch every 8 hours (in milliseconds: 8 hours * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second)
    setInterval(fetchAndUpdateData, 8 * 60 * 60 * 1000);
});
