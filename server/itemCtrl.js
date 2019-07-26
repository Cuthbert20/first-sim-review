module.exports = {
    getItems: async (req,res) => {
        const db = req.app.get('db')
        //when using async await you have to assign db.get_all_items() to a variable
        let allItems = await db.get_all_items()
        res.status(200).send(allItems)
        //other way to write upper two lines
        //db.get_all_items()
        //.then(allItems => { 
          //res.status(200).send(allItems)  
        //})
    },
    createItem: async (req,res) => {
        const db = req.app.get('db')
        let createdItem = await db.create_item(req.body).catch(err =>{
            res.sendStatus(500)
        })
        res.status(201).send(createdItem)
    }
}