const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
                <div>
                  <img src="/images/pizza-pic.jpg" alt="donkey picture" />
                  <div>
                  Photo by <a href="https://unsplash.com/@dan_scape?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dan Cook</a> on <a href="https://unsplash.com/photos/long-coated-brown-animal-MCauAnBJeig?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                  </div>
                </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404