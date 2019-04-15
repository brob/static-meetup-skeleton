var project = require('../gulp-src/_project.js');
var axios   = require('axios');

module.exports = async function() {
    let url = `https://api.meetup.com/${process.env.MEETUP_URL }/events?photo-host=public&page=20&sig_id=${process.env.MEETUP_KEY}`;
    let stringMatch = ""; // Match meetup name against a string if you need to filter
    return axios.get(url)
        .then(function (response) {
            let data = response.data;
            if (stringMatch.length > 0) {
                data = data.filter(meetup => {
                    return meetup.name.includes(stringMatch);
                });
            }
            return data;
        })
        .catch(function(error) {
            console.log(error);
        });

}