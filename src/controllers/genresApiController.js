const {validationResult} = require("express-validator")
const createResponseError = require("../helpers/createResponseError");
const { getAllGenres, getOneGenre, createGenre } = require("../services/genresServices");


module.exports = {
    list: async(req, res) => {

        try {
            const genres = await getAllGenres()

            return res.status(200).json({
                ok : true,
                data : genres,
                meta : {
                    status: 200,
                    total : genres.lenght, // Siempre usar la misma estructura en la misma api
                    url : "/api/genres"
                },
            })
        } catch (error) {
            return createResponseError(res, error)
        }

    },
    detail: async (req, res) => {

        try {

            const {
                params : {id}
            } = req;

            const genre = await getOneGenre(id)

            return res.status(200).json({
                ok : true,
                data : genre,
                meta : {
                    status: 200,
                    total : 1,  // Siempre usar la misma estructura en la misma api
                    url : `/api/genres/${id}`
                },
            })

        } catch (error) {
            createResponseError(res, error)
        }
    },

    store : async (req, res) => {

        try {
            
            const errors =validationResult(req);

            if(!errors.isEmpty()) throw {
                status : 400,
                message : errors.mapped()
            }

            const newGenre = await createGenre(req.body);

            return res.status(200).json({
                ok : true,
                data : newGenre,
                meta : {
                    status: 200,
                    total : 1,  // Siempre usar la misma estructura en la misma api
                    url : `/api/genres/${newGenre.id}`
                },
            })

        } catch (error) {
            return createResponseError(res, error)
        }
    },

    update : async (req, res) => {

    },

    destroy : async (req, res) => {

    },
};
 