import React from 'react';

import FontAwesome from 'react-fontawesome';

export class Loading extends React.Component{

    render(){
        return (
            <div className={'loading display-2 d-flex flex-column justify-content-center align-items-center'}>
                <div className={'animated bounceIn infinite'}>
                    <FontAwesome
                        name={'spinner'}/>
                </div>
            </div>
        );
    }
}