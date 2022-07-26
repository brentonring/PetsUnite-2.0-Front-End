const React = require('react');

function error404(){
    return(
        <div><h1>404: PAGE NOT FOUND</h1>
            <p>You seem lost...</p>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/16/16/teddy-bear-1835598__480.jpg" alt="Photo of a Teddy Bear"></img> 
                </div>
                    <a href="/"><button className="btn btn-primary">Home Page</button></a> 
        </div>
    )
}

export default error404;

