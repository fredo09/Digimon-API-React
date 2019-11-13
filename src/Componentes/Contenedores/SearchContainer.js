import React, { Component } from 'react';

class SearchContainer extends Component {
    state = { inputData : '' }

    _handleChange = (e) => {  
        console.log(e.target.value);
        this.setState({ inputData : e.target.value })
    }

    _hanldeSubmit = (e) => {
        e.preventDefault();
        const { inputData } = this.state;
        fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${inputData}`)
             .then( res => res.json())
             .then(data => {
                 console.log(data);
             });
    } 

    render(){
        return(
            <div className="container">
                <form 
                    className="field is-grouped " 
                    onSubmit={this._hanldeSubmit} >
                        
                    <p className="control is-expanded">
                        <input 
                            className="input" 
                            type="text"
                            placeholder="Busca tu Digimon..." 
                            onChange={this._handleChange} />
                    </p>
                    <p className="control">
                        <button className="button is-info">
                        Search Digimon
                        </button>
                    </p>
                </form>
            </div>
        ); 
    }
}

export default SearchContainer;