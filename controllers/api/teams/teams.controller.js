const teamsRepo = require('../../../lib/teamsRepository'),
      util = require('util');

class TeamsController {

    constructor(router) {
        router.get('/', this.getTeams.bind(this));
    }

    getTeams(req, res) {
        console.log('*** getTeams');
        teamsRepo.getTeams((err, data) => {
            if (err) {
                console.log('*** getTeams error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getTeams ok');
                res.json(data.teams);
            }
        });
    }


}

module.exports = TeamsController;