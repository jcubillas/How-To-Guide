import React from 'react'

export default class LatLongFields extends React.Component{

    constructor(props){
        super(props)
        
    }

    changeValue(field,value){
        this.props.onChange(this.props.id,field,value)
    }

    render(){
        return (
            <div>
                <label>{this.props.title}</label>
                <div>
                    <input type="text" value={this.props.value.address} onChange={(e) => this.changeValue("address",e.target.value)} />
                </div>
            </div>
        )
    }

}