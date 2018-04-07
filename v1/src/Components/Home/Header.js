
import React from 'react';

export class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div
                id={'header'}
                className={'pageItem'}>
                header
            </div>
        );
    }
};