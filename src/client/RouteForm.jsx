import React from 'react'
import LatLongFields from './LatLongFields';

export default class RouterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            from : {address : ""},
            to : { address : ""}
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(id,field,value){
        this.setState( prevState => {
            const newField = Object.assign({},prevState[id],{[field]:value})
            return Object.assign({},prevState,{[id]:newField})
        })
    }

    render(){
        return (
            <div className="inputs">
                <LatLongFields 
                    id="from" 
                    title="From" 
                    value={this.state.from}
                    onChange={this.onChange} />
                <LatLongFields 
                        id="to" 
                        title="To" 
                        value={this.state.to}
                        onChange={this.onChange} />
                <button className="btn btn-primary margin-button" onClick={() => this.props.onFind(this.state)}>Search</button>
            </div>
        )
    }

}