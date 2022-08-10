const express = require('express')
const cors = require('cors')

const db = require('../database/connection')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            products: `${process.env.PATH_URL}/${process.env.STAGE}`
        }

        this.dbConnection()
        this.middlewares()
        this.routes()

    }

    async dbConnection() {

        try {

            await db.authenticate()
            console.log('Database online')
            
        } catch (error) {
            throw new Error( error )
        } 
    }

    middlewares() {

        //CORS
        this.app.use( cors() )

        //Lectura y parseo del body
        this.app.use( express.json() )

        //Directorio publico
        this.app.use( express.static( 'public' ) )
    }

    routes() {
        this.app.use( this.paths.products, require( '../routes/products/products' ) )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server running on port:', this.port )
        })
    }

}

module.exports = Server