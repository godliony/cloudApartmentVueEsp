const db = require('../firestore')
module.exports = {
    async index(req, res) {
        try {
            /* db.collection('User').where('name', '==', 'NuttavatBoo').get().then((snapshot) => {
                snapshot.forEach(doc => {
                    res.send(doc.data())
                });
            }) */
            let users = await db.collection('Users')
            res.send(users)
        } catch (err) {
            res.status(403).send({
                error: "Query user incorrect"
            })
            console.log(err)
        }
    },
    async create(req, res) {
        let data = req.body
        try {
            await db.collection('Users').doc().set(data)
            res.send(data)
        } catch (err) {
            res.status(403).send({
                error: "Create user incorrect"
            })
        }
        res.send(JSON.stringify(req.body))
    },
    async put(req, res) {
        let data = req.body
        try {
            await db.collection('User').doc(req.params.userId).set(data)
            res.send({
                id: req.params.userId,
                data: data
            })
        } catch (err) {
            res.status(403).send({
                error: 'Update user incorrect'
            })
        }
    },
    remove(req, res) {
        res.send("remove")
    },
    show(req, res) {
        res.send("show")
    },
}