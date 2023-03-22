
const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav className='navbar-nav'>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add a Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <div className="push"></div>
                <footer>
                    <nav className='footer'>
                        <ul>
                            <li className='copyright'>Made by Jeremy Lehmann</li>
                            <li><a className='a1' href="https://github.com/Jehman06" target="_blank">GitHub</a></li>
                            <li><a className='a2' href="https://www.linkedin.com/in/jeremy-lehmann/" target="_blank">Linkedin</a></li>
                        </ul>
                    </nav>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def

