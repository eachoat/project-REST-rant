const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>

            <section class="col-md-6 text-right">
                <h2 className="body" >Ratings</h2>
                    <div>currently unrated</div>
            </section>

            <section>
                    <img class="img-fluid">{data.place.pic}</img>
            </section>

            <section class="col-md-6 text-right">
                <h2 className="body" >Description</h2>
                    <div>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</div>
            </section>

            <section class="col-md-6 text-right">
                <h2 className="body" >Comments</h2>
                    <div>No comments yet!</div>
            </section>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     


            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     


          </main>
        </Def>
    )
}

module.exports = show
