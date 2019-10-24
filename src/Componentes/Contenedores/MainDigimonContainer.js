import React,{ Component } from 'react';
import SearchContainer from './SearchContainer';
import DigimonsList from './../Componente/DigimonListLayout'
import SpinnerLayout from './../Componente/SpinnerLayout';

class MainDigimonContainer extends Component{
    state = { Digimons : [] , IsLoading: false}

    componentDidMount () {
        this.setState({ IsLoading : true });
        fetch('https://digimon-api.herokuapp.com/api/digimon')
             .then( res => res.json())
             .then(data => {
                 console.log(data);
                 this.setState({ Digimons: data, IsLoading:false });
                 console.log('mI data ', this.state.Digimons);
             });
    }
    
    _renderSpinner = () => {
        return <SpinnerLayout />
    }

    render(){
        const { Digimons, IsLoading } = this.state;
        return (
            <div>          
                <SearchContainer />
                {
                    IsLoading 
                    ? this._renderSpinner()
                    : <DigimonsList Digimons={Digimons}/>
                }                
            </div>
        );
    }
}

export default MainDigimonContainer;

