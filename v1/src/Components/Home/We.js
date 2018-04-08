
import React from 'react';

import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';

export class We extends React.Component{
    constructor(props) {
        super(props);

        this.GetTitle = this.GetTitle.bind(this);
        this.GetDescription = this.GetDescription.bind(this);
    }

    GetTitle(){
        let title = this.props.data.title;

        return (
            <span>{title}</span>
        );
    }
    
    GetDescription(){
        let description = this.props.data.description;

        return (
            <span>{description}</span>
        );
    }
    
    render() {
        return (
            <div
                id={'we'}
                className={'pageItem py-3'}>
                <div
                    className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-6 offset-lg-3 col-sm-10 offset-sm-1'}>
                            <div className={'blockTitle text-uppercase text-danger display-3 text-center'}>
                                {this.GetTitle()}
                            </div>
                        </div>
                        {/* <div className={'col-lg-4 offset-lg-4 col-md-6 offset-md-3'}>
                            <div className={'bg-primary line pt-1 mt-2'}/>
                        </div> */}
                    </div>
                    <div className={'row'}>
                        <div 
                            className={'col-lg-6 offset-lg-3 col-sm-10 offset-sm-1'}>
                            <div className={'text-capitalize blockSubTitle text-primary display-5 text-center'}>
                                {this.GetDescription()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}