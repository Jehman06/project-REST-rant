
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Whoopsie, we can't find this page. Sorry.</p>
                <div>
                    <img src="/images/smiling dog.png" alt="Smiling dog"/>
                    <div>
                        Photo by <a href="https://www.thisdogslife.co/dog-cant-stop-smiling-when-grasshopper-lands-on-her-head/">This Dogs Life</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404