import React from 'react'
import LatLongFields from './LatLongFields';

export default class RouterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            from : { lat : -34.5997051 , lng : -58.398990069999996},
            to : { lat : -34.58940382 , lng : -58.42911291}
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
            <div>
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
                <button onClick={() => this.props.onFind(this.state)}>Search</button>
            </div>
        )
    }

}