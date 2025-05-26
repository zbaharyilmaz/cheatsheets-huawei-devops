"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use('/account/auth', require('./auth'))
// call user.create for /account/register:
const { create: userCreate } = require('../controllers/user')
router.post('/account/register', userCreate)

// user:
router.use('/users', require('./user'))
// token:
router.use('/tokens', require('./token'))

// brand:
router.use('/stock/brands', require('./brand'))
// category:
router.use('/stock/categories', require('./category'))
// firm:
router.use('/stock/firms', require('./firm'))
// product:
router.use('/stock/products', require('./product'))
// purchase:
router.use('/stock/purchases', require('./purchase'))
// sale:
router.use('/stock/sales', require('./sale'))

// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router