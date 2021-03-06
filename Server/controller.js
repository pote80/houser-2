module.exports = {

    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_all_houses().then((data) => {
            res.status(200).send(data)
        })
    },

    newHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { property_name, property_address, property_city, property_state, property_zip } = req.body;
        dbInstance.add_new_house([property_name, property_address, property_city, property_state, property_zip]).then((response) => {
            res.sendStatus(201)
        })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = +req.params.id
        dbInstance.delete_house(id).then((response) => {
            res.status(200)
        })
    }
}