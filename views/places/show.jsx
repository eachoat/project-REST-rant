const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
        }
        
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
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
                        {comments}

                        {/* Comment Form*/}

                        <form method="POST" action={`/places/${data.id}/rant`}>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" name="author" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" name="content" rows="3" required> </textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stars">Star Rating</label>
                                <input type="number" className="form-control" id="stars" name="stars" step="0.5" required />
                            </div>

                            <div className="form-group">
                                <label className="form-check-label" htmlFor="rant">Rant</label>
                                <input type="checkbox" className="form-check-input" id="rant" name="rant" required />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit Comment
                            </button>

                        </form>
                            
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
