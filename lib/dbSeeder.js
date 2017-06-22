// Module dependencies
const   mongoose = require('mongoose'),
        Team = require('../models/team'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    
    init() {
        mongoose.connection.db.listCollections({name: 'teams'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }
    
    seed() {

        console.log('Seeding data....');

        //Teams
        var teamNames =
        [
            "Temperley",
            "Boca Juniors",
            "River Plate",
            "San Lorenzo",
            "Racing Club",
            "Independiente",
            "Huracan",
            "Rosario Central",
            "Banfield",
            "Newells",
            "Lanus",
            "Quilmes",
            "Talleres",
            "Belgrano",
            "Atletico Tucuman",
            "San Martin",
            "Olimpo",
            "Aldosivi",
            "Sarmiento",
            "Velez",
            "Patronato",
            "Defensa y Justicia",
            "Tigre",
            "Estudiantes",
            "Gimnasia y Esgrima"
        ];
        var descriptions =
        [
            "Temperley",
            "Boca Juniors",
            "River Plate",
            "San Lorenzo",
            "Racing Club",
            "Independiente",
            "Huracan",
            "Rosario Central",
            "Banfield",
            "Newells",
            "Lanus",
            "Quilmes",
            "Talleres",
            "Belgrano",
            "Atletico Tucuman",
            "San Martin",
            "Olimpo",
            "Aldosivi",
            "Sarmiento",
            "Velez",
            "Patronato",
            "Defensa y Justicia",
            "Tigre",
            "Estudiantes",
            "Gimnasia y Esgrima"
        ];

        var shirtColor =
        [
            "Blue",
            "Blue and Yellow",
            "Red and White",
            "Red and Blue",
            "Blue and White",
            "Red",
            "White and Red",
            "Blue and Yellow",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White",
            "White"
     ];

        var cities =
        [
            "Temperley",
            "CABA",
            "CABA",
            "CABA",
            "Avellaneda",
            "Avellaneda",
            "CABA",
            "Rosario",
            "Banfield",
            "Rosario",
            "Lanus",
            "Quilmes",
            "Cordoba",
            "Cordoba",
            "Tucuman",
            "San Juan",
            "Bahia Blanca",
            "Mar del Plata",
            "Junin",
            "CABA",
            "Parana",
            "Florencio Varela",
            "Tigre",
            "La Plata",
            "La Plata"
        ];

        Team.remove({});

        var l = teamNames.length,
            i,
            j;

        for (i = 0; i < l; i++) {
            var team = new Team({
                'id': i,
                'name': teamNames[i],
                'description': descriptions[i],
                'shirtColor': shirtColor[i],
                'city': cities[i]
            });

            team.save((err, tea) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted team: ' + tea.name);
                }
            });
        }

    }
}

module.exports = new DBSeeder();




