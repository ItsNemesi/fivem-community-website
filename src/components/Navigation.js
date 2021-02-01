import {Component} from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: window.pageYOffset
        }
    }

    onScroll = event => {
        let nav = document.querySelector('#navbar');
        this.setState({scrollY: window.pageYOffset})
        if(this.state.scrollY <= 10)
            nav.className = 'navbar';
        else
            nav.className = 'navbar nav-active';
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <div className="navbar" id="navbar">
                <div className="inner">
                    <div>
                        <h3>RedwoodRP</h3>
                    </div>
                    <div>
                        <p>Current Player's Online: 0</p>
                    </div>
                    <div>
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Players</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;