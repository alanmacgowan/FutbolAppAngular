const teamsRepo = require('../../../lib/teamsRepository'),
      util = require('util');

class TeamsController {

    constructor(router) {
        router.get('/', this.getTeams.bind(this));
        router.get('/page/:skip/:top', this.getTeamsPage.bind(this));
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

    getTeamsPage(req, res) {
        console.log('*** getTeamsPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        teamsRepo.getPagedTeams(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getTeamsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getTeamsPage ok');
                res.json(data.teams);
            }
        });
    }

}

module.exports = TeamsController;