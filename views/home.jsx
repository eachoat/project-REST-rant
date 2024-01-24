const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/pizza-pic.jpg" alt="pizza picture" />
                <div>
                  Photo by <a href="AUTHOR_LINK">Chad Montano</a> on <a href="https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                  <button className="btn-primary">Places Page</button>
              </a>

          </main>

         
      </Def>
    )
  }

  

module.exports = home
