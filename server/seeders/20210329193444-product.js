'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
                id: 1,
                nom: "miel de fleurs d'oranger",
                description: 'miel bio ',
                adresse: 'Béja',
                cp: '4011',
                pays: 'tunisie',
                image: '["miel-de-fleurs-d-oranger.jpg"]',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 2,
                nom: 'miel de marrube',
                description: 'miel bio ',
                adresse: 'Seliana',
                cp: '4011',
                pays: 'tunisie',
                image: '["miel-de-marrube.jpg"]',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 3,
                nom: 'miel de montagne',
                description: 'miel bio ',
                adresse: 'EL kef',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                image: '["miel-de-montagne.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 4,
                nom: 'miel pur de jujubier ',
                description: 'miel pur ',
                adresse: 'Jendouba',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                image: '["miel-pur-de-sidr-jujubier.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 5,
                nom: 'miel pur toutes fleurs',
                description: 'miel pur ',
                adresse: 'Béja',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                image: '["miel-toutes-fleurs.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 6,
                nom: 'miel pur deucalyptus',
                description: 'miel pur ',
                adresse: 'Béja',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                image: '["miel-pur-d-eucalyptus.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 7,
                nom: 'gel aloe vera bio',
                description: 'gel',
                adresse: 'Sidi bouzid',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["gel-aloe-vera-Bio-pur.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 8,
                nom: 'gélules aloe vera',
                description: 'gélules',
                adresse: 'Jerba',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["Gélules-aloe-vera-BIO.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                nom: 'jus aloe vera',
                description: 'jus bio',
                adresse: 'Gabes',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["jus-aloe-vera-bio-pur.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 10,
                nom: 'jus aloe vera pamplemousse',
                description: 'jus bio',
                adresse: 'Gassrine',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["jus-daloe-vera-à-lextrait-de-pepins-de-pamplemousse.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 11,
                nom: 'stimulant sexuel',
                description: 'gélule',
                adresse: 'jerba',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["jus-aloe-vera-bio-pur.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 12,
                nom: 'sweet nature sucralose',
                description: 'Benzert',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 2,
                image: '["sweet-nature-sucralose-liquide.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },


            {
                id: 13,
                nom: ' chardonnay et muscat',
                description: 'vin blanc',
                adresse: 'sousse',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Chardonnay-muscat.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 14,
                nom: ' chardonnay',
                description: 'vin blanc',
                adresse: 'Monastir',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Chardonnay.png"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 15,
                nom: 'chateau mornag rosé',
                description: 'vin rosé',
                adresse: 'Hammmet',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["chateau-mornag-rosé.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 16,
                nom: ' chateau mornag rouge ',
                description: 'vin rouge',
                adresse: 'Gamerth',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["chateau-mornag-rouge.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 17,
                nom: 'didona blanc',
                description: 'blanc',
                adresse: 'Marssa',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Didona-blanc.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 18,
                nom: 'gris d`hammamet',
                description: 'vin rosé',
                adresse: 'Hammamet',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["gris-dhammamet.png"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 19,
                nom: 'muscat de kelibia',
                description: 'vin blanc',
                adresse: 'Kelibia',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Muscat-Sec-de-Kelibia.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 20,
                nom: 'muscat sec',
                description: 'vin blanc',
                adresse: 'kelibia',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Muscat-sec.png"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 21,
                nom: 'selian blanc',
                description: 'vin blanc',
                adresse: 'Nabeul',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Selian-blanc.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 22,
                nom: 'ugni blanc',
                description: 'vin blanc',
                adresse: 'Grembelia',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["ugni-blanc.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 23,
                nom: 'magon rouge',
                description: 'vin rouge',
                adresse: 'Sousse',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["magon-rosé.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 24,
                nom: 'canelle en baton',
                description: 'canelle',
                adresse: 'Mahdia',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["magon-rosé.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 25,
                nom: 'cardamone',
                description: 'epice',
                adresse: 'sfax',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["cardamone.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 26,
                nom: 'cumin',
                description: 'epice',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["cumin.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 27,
                nom: 'curcuma',
                description: 'epice',
                adresse: 'kairoun',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["curcuma.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 28,
                nom: 'epice de couscous',
                description: 'epice',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["epices-couscous.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 29,
                nom: 'la harissa',
                description: 'condiment',
                adresse: 'Nabeul',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["Harissa.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 30,
                nom: 'le tabeul',
                description: 'epice',
                adresse: 'Gafsa',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                actif: true,
                image: '["le-tabeul.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 31,
                nom: 'muscade',
                description: 'epice',
                adresse: 'tunis',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["muscade.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 32,
                nom: 'paprika',
                description: 'epice',
                adresse: 'Ariana',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["paprika.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 33,
                nom: 'ras elhanout',
                description: 'epice',
                adresse: 'mahdia',
                cp: '4011',
                pays: 'tunisie',
                category_id: 3,
                image: '["ras-el-hanout.jpg"]',
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 34,
                nom: 'dattes alig',
                description: 'dattes',
                category_id: 5,

                image: '["dattes-alig.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 35,
                nom: 'dattes kenta',
                description: 'dattes',
                category_id: 5,
                adresse: 'Touzeur',
                image: '["dattes-kenta.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 36,
                nom: 'dattes khouat',
                description: 'dattes',
                adresse: 'Touzeur',
                category_id: 5,
                image: '["dattes-khouat-alig.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 37,
                nom: 'dattes le medjoul',
                description: 'dattes',
                adresse: 'Touzeur',
                category_id: 5,
                image: '["dattes-le-medjoul.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 38,
                nom: 'deglet ennour',
                description: 'dattes',
                adresse: 'Touzeur',
                category_id: 5,
                image: '["deglet-ennour.jpeg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },


            {
                id: 39,
                nom: 'huile dolive extra vierge',
                description: 'huile dolive',
                adresse: 'sfax',
                category_id: 6,
                image: '["huile-dolive-extra-vierge.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 40,
                nom: 'huile dolive fruité',
                description: 'huile dolive',
                adresse: 'sfax',
                image: '["huile-dolive-fruite-vert.jpg"]',
                category_id: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 41,
                nom: 'huile dolive fruité mur',
                description: 'huile dolive',
                adresse: 'sfax',
                category_id: 6,
                image: '["huile-dolive-fruite-mur.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 42,
                nom: 'huile dolive au truffe',
                description: 'huile dolive',
                adresse: 'sfax',
                category_id: 6,
                image: '["huile-olive-truffe.jpg"]',
                createdAt: new Date(),
                updatedAt: new Date(),
            },



        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
                id: 1,
                nom: 'miel ',
                description: 'miel miel ',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 2,
                nom: 'xxxxxx',
                description: 'yyyyyy',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};