
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
                <nav>
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
                            <li><a href="https://github.com/Jehman06">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/jeremy-lehmann/">Linkedin</a></li>
                        </ul>
                    </nav>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def