
// Added Strava API GET Link as function getActivities.
function getActivities() {
    // Declare the link as a constant
    const activitiesLink = "https://strava.com/api/v3/athlete/activities?access_token=c0b7796e6f9354733ac6384388a98ca4728bf27e"
    // Fetch the link contents ?
    fetch(activitiesLink)
    // If there's a response -> Log it.
        .then((response) => console.log(response.json()));
}

getActivities();