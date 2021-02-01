import DiscordLogo from "../assets/images/discord.png";

const Hero = props => {
    return(
        <section className="hero">
            <div className="inner" style={{textAlign: 'center'}}>
                <div>
                    <h1 style={{fontSize: '3rem'}}>RedwoodRP</h1>
                    <a href=""><img style={{width: '128px', backgroundColor: 'rgba(255,255,255,0.2)'}} src={DiscordLogo} alt="Discord Logo"/></a>
                </div>
                <div>
                    <h3 style={{textAlign: 'center'}}>Trailer</h3>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/d3vOeCkeCNA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                </div>
            </div>
        </section>
    )
}

export default Hero;