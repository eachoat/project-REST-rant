const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
                <div className="row">
                    <h1>{data.place.name}</h1>

                    <section class="col-sm-6">
                        <h2 className="body" >Ratings</h2>
                            <div>currently unrated</div>

                        <img class="img-fluid">{data.place.pic}</img>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </section>

                    <section class="col-sm-6">
                        <h2 className="body" >Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </section>

                    <section class="col-sm-6">
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

                </div>
          </main>
        </Def>
    )
}

module.exports = show
