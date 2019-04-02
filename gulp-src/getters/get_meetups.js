// If You'd rather use Gulp than 11ty's built-in data building, add this back to your serve and build steps
var project = require('../_project.js');
var gulp    = require('gulp');
var axios   = require('axios');


gulp.task('meetup:get', async function () {
    // URL for data store
    let url = `https://api.meetup.com/${process.env.MEETUP_URL }/events?photo-host=public&page=20&sig_id=${process.env.MEETUP_KEY}`;
    let statusFile = "_data/meetups.json";
    let stringMatch = ""; // Match meetup name against a string if you need to filter
    axios.get(url)
        .then(function (response) {
            let data = response.data;
            if (stringMatch.length > 0) {
                data = data.filter(meetup => {
                    console.log(meetup.name);
                    return meetup.name.includes(stringMatch);
                });
            }
            return project.storeData(statusFile, JSON.stringify(data));
        })
        .catch(function(error) {
            console.log(error);
        });


});