const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Team = require('../models/team');

class TeamsRepository {

    // get all the teams
    getTeams(callback) {
        console.log('*** TeamsRepository.getTeams');
        Team.count((err, teamCount) => {
            var count = teamCount;
            console.log(`Teams count: ${count}`);

            Team.find({}, (err, teams) => {
                if (err) { 
                    console.log(`*** TeamsRepository.getTeams error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    teams: teams
                });
            });

        });
    }


}

module.exports = new TeamsRepository();