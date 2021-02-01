import Nemesi from "../assets/images/nemesi.jpg";
import axios from "axios";
import React, {Component} from "react";

class Staff extends Component {
    state = {
        data: {
            staff: []
        }
    }
    async componentDidMount() {
        this.setState({data: require("../config.json")})
    }

    render() {
        return (
            <section className="staff">
                <div className="inner">
                    {this.state.data.staff.map(x =>
                        <div>
                            <img src={x.image} alt=""/>
                            <h4><u>{x.name}</u></h4>
                            <h6>{x.role}</h6>
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Staff;