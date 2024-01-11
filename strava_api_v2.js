const authLink = "https://www.strava.com/oauth/token?client_id=119649&client_secret=8c4eb18a2ee64078230c4c0d6a7bc5f0bf54d787&refresh_token=dd00d414e482bd934a64ec5ddb4880192efd6bdb&grant_type=refresh_token";

async function getActivities() {
    const activitiesLink = "https://strava.com/api/v3/athlete/activities";
    try {
        const response = await fetch(activitiesLink, {
            headers: {
                'Authorization': 'Bearer c0b7796e6f9354733ac6384388a98ca4728bf27e',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching activities:', error);
    }
}

async function reAuthorize() {
    try {
        const response = await fetch(authLink, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: '119649',
                client_secret: '8c4eb18a2ee64078230c4c0d6a7bc5f0bf54d787',
                refresh_token: 'dd00d414e482bd934a64ec5ddb4880192efd6bdb',
                grant_type: 'refresh_token'
            })
        });
        const authData = await response.json();
        await getActivities(authData);
    } catch (error) {
        console.error('Error reauthorizing:', error);
    }
}

reAuthorize();
