const db = require('../firestore')
module.exports = {
    async index(req, res) {
        try {
            let powermeterId = req.params.powermeterId
            let logs = []
            db.collection(powermeterId).get().then((snapshot) => {
                snapshot.forEach(doc => {
                    logs.push({ [doc.id]: doc.data() })
                })
                res.send(logs)
            })
        } catch (err) {
            res.status(403).send({
                error: "Query powermeter incorrent"
            })
        }
    },
    async create(req, res) {
        let data = req.body
        try {
            let date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            let seconds = date_ob.getSeconds();

            await db.collection(req.params.powermeterId).doc(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds).set(data)
            res.send(data)
        } catch (err) {
            res.status(403).send({
                error: "data incorrent"
            })
        }
        res.send(JSON.stringify(req.body))
    },
    put(req, res) {
        res.send("put")
    },
    remove(req, res) {
        res.send("remove")
    },
    show(req, res) {
        res.send("show")
    },
}