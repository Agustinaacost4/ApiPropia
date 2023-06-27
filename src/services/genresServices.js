const db = require("../database/models");


module.exports = {
    getAllGenres: async () => {
        try {
            const genres = await db.Genre.findAll();

            return genres
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },

    getOneGenre: async (id) => {
        try {

            const genre = await db.Genre.findByPk(id);
            return genre;
            
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },

    createGenre : async (date) => {
        try {
            
            const newGenre = db.Genre.create({
                ...date
            });

            return newGenre

        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    }
}