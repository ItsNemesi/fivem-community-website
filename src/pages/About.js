import Staff from "../components/Staff";

const About = props => {
    return(
        <section className="page">
            <h1>Who are we?</h1>
            <p>
                We are a new RP server from the UK. We run a american roleplay server.
                Focusing of realism. This is so our roleplayers get the best out of the server.

            </p>

            <h1>Lead Staff</h1>
            <Staff />
        </section>
    )
}

export default About;