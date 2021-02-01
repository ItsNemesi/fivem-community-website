const Features = props => {
    return(
        <section className="features">
            <div className="inner">
                <div>
                    <i className="fas fa-cogs" />
                    <h2>Custom Framework</h2>
                    <p>
                        We have an in house developed framework. This allows us to create a custom experiance
                        for all our players.
                    </p>
                </div>
                <div>
                    <i className="fas fa-chess-board" />
                    <h2>Custom Assets</h2>
                    <p>
                       The assets we have in our server are high quality. These include cars, clothing, map files & a whole lot more.
                    </p>
                </div>
                <div>
                    <i className="fas fa-car" />
                    <h2>Car Balancing</h2>
                    <p>
                        We have a car developer who is constantly working on balancing the servers cars. This
                        helps ensure a great experience.
                    </p>
                </div>
                <div>
                    <i className="fas fa-file-code" />
                    <h2>Optimised Code</h2>
                    <p>
                        Our developers make sure you have a great experience and that your computer isn't bogged down by bad code.
                    </p>
                </div>
                <div>
                    <i className="fas fa-car" />
                    <h2>Development Team</h2>
                    <p>
                        Our development team are great at what they do. They love to keep the server fresh are new.
                    </p>
                </div>
                <div>
                    <i className="fas fa-car" />
                    <h2>Anticheat</h2>
                    <p>
                        We have an anticheat that can detect most popular menus used by cheaters.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features;