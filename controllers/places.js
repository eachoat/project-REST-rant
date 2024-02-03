const router = require('express').Router()
const db = require('../models')


// Index route
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


// Get /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})



// Post /places

router.post('/', (req, res) => {
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `${err.errors[field].message}`
        }
        //TODO: Generate error message (s)

        res.render('places/new', { message })
      }
      else {
          res.render('error404')
      }
  })
})



// Show Route

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



//Delete Route

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})


//Edit route

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})


//PUT route
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})



router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})


router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})






module.exports = router