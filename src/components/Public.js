import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap"><b>You Know Who</b> Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the Beautiful city of Salem, <b>You Know Who</b> Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    <b>You Know Who</b> Repairs<br />
                    West of a Beautiful House<br />
                    Salem, a beauty wonder<br />
                    <a href="tel:+917904903079">(+91) 790-430-9079</a>
                </address>
                <br />
                <p>Owner: <b>You Know Who</b> </p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public