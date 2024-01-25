const router = require('express').Router()

// Get /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/pizza-pic.jpg'
      }]
      
    res.render('places/index', {places})
})

// Post /places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router