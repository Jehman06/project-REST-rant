const React = require('react')
const Def = require('../default')

function Show(data) {
    return (
        <Def>
            <main>
                <br/>
                <div className="row">
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3>
                            Located in {data.place.city}, {data.place.state}.
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>No Ratings yet.</p>
                        <h2>Description</h2>
                        <h4>
                            {data.place.showEstablished()}
                        </h4>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                                        Edit
                                    </a>
                                </div>
                                <div className='col-sm'>
                                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                        <button type="submit" className='btn btn-danger'>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className='container-fluid'>
                    <h1>Comments</h1>
                    <p>No comments yet.</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show