const express = require('express')
const router = express.Router()
const db = require('../db/database')

router.route('/').get((req, res) => {
    const sql = "SELECT * FROM penjualan"

    db.query(sql, (err, result) => {
        const response = JSON.parse(JSON.stringify(result))
        res.send(response)
    })
})

router.route('/tambah').post((req, res) => {
    const sql = "INSERT INTO penjualan (`produk`, `harga`, `tanggal`) VALUES (?)"

    const values = [
        req.body.produk,
        req.body.harga,
        req.body.tanggal
    ]
    db.query(sql, [values], (err, result) => {
        console.log(err)
        res.json(result)
    }) 
})

router.route('/update/:id').put((req, res) => {
    const sql = "update penjualan set `produk` = ?, `harga` = ?, `tanggal` = ? where id = ? "
    const values = [
        req.body.produk,
        req.body.harga,
        req.body.tanggal
    ]

    const id = req.params.id

    db.query(sql, [...values, id], (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

router.route('/produk/:id').delete((req, res) => {
    const sql = "DELETE FROM penjualan WHERE ID = ?"
    const id = req.params.id

    db.query(sql, [id], (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

module.exports = router