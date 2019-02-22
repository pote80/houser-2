import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../App.css'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            property_name: '',
            property_address: '',
            property_city: '',
            property_state: '',
            property_zip: 0,
        }
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleWhatStateChange = this.handleWhatStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.addNewHouse = this.addNewHouse.bind(this);
    }

    handleNameChange = (e) => {
        this.setState({ property_name: e.target.value })
    }

    handleAddressChange = (e) => {
        this.setState({ property_address: e.target.value })
    }

    handleCityChange = (e) => {
        this.setState({ property_city: e.target.value })
    }

    handleWhatStateChange = (e) => {
        this.setState({ property_state: e.target.value })
    }

    handleZipChange = (e) => {
        this.setState({ property_zip: e.target.value })
    }

    addNewHouse = () => {
        //this.props.history.push
        const { property_name, property_address, property_city, property_state, property_zip } = this.state
        axios.post('/api/houses', { property_name, property_address, property_city, property_state, property_zip })
            .then(() => (this.props.history.push('/')))
    }

    render() {
        return (
            <div>
                <div>Wizard</div>
                <div><label> Property Name: <input value={this.state.property_name} onChange={this.handleNameChange} /></label></div>
                <div><label> Address: <input value={this.state.property_address} onChange={this.handleAddressChange} /></label></div>
                <div><label> City: <input value={this.state.property_city} onChange={this.handleCityChange} /></label></div>
                <div><label> State: <input value={this.state.property_state} onChange={this.handleWhatStateChange} /></label></div>
                <div><label> Zip: <input type="number" value={this.state.property_zip} onChange={this.handleZipChange} /></label></div>
                <div>
                    <button onClick={this.addNewHouse} >Submit</button>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
            </div>
        )
    }
}