module.exports = {
    
    getInventory: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.get_inventory(id)
    .then(() => res.status(200).send(get_inventory))
    .catch (err => {
        res.status(500).send({errorMessage:'Uh oh something is wrong'});
        console.log(err);
        })
    },
    //add new products to your database
    postProduct: (req, res, next) => {
            const db = req.app.get('db');
            const { name, price, img_url} = req.body
            console.log("THIS IS THE BODY", req.body)
            db
            .create_product([name, price, img_url])
            .then( () => res.sendStatus(200) )
            .catch (err => {
                res.status(200).send({errorMessage: 'Uh oh something is wrong'})
            }) 
         },
    deleteProduct: (req, res, next) => {
        const db = req.app.get('db');
        
    }
    
    
    
}














