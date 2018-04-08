
import React from 'react';

import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';

export class Services extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            rwidth: null
        };


        this.SetRectSize = this.SetRectSize.bind(this);
        this.GetTitle = this.GetTitle.bind(this);
        this.GetServices = this.GetServices.bind(this);
    }

    SetRectSize(element){
        if(this.state.rwidth === null){
            if(element){
                this.setState({rwidth: element.offsetWidth - element.offsetWidth / 4});
            }
        }
    }

    GetTitle(){
        let title = this.props.data.title;

        return (
            <span>{title}</span>
        );
    }

    GetServices(){
        let services = this.props.data.services;

        return services.map((service, index) => {
            return (
                <Link 
                    to={service.route}
                    className={`serviceItem my-1 my-sm-0 px-2 px-sm-0 py-lg-0 py-2 text-center d-flex flex-column justify-content-center align-items-center ${index === 1 ? `order-3 order-sm-${index}`: `order-${index}`}  ${index === 0 || index === 1 ? 'bg-primary': 'bg-white'}`}
                    key={service.name}>
                    <div className={'serviceItemsContainer d-flex flex-column align-items-center justify-content-center'}>
                        <div
                            className={'text-danger h1 mb-2'}>
                            <div className={'serviceItemItem'}>
                                <FontAwesome
                                    tag="div"
                                    name={service.icon}/>
                            </div>
                        </div>
                        <div className={`px-2 px-sm-0 text-capitalize text ${index === 0 || index === 1 ? 'text-light' : 'text-primary'}`}>
                            <div
                                className={'serviceItemItetext'}>
                                {service.title}
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
    }

    render() {
        return (
            <div
                id={'services'}
                className={'pageItem py-3'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-6 offset-lg-3 col-sm-10 offset-sm-1'}>
                            <div className={'blockTitle text-uppercase text-primary display-3 text-center'}>
                                {this.GetTitle()}
                            </div>
                        </div>
                        {/* <div className={'col-lg-4 offset-lg-4 col-md-6 offset-md-3'}>
                            <div className={'bg-primary line pt-1 mt-2'}/>
                        </div> */}
                    </div>
                    <div className={'row'}>
                        <div className={'services p-0 mt-sm-0 mt-5 col-lg-6 offset-lg-3 col-sm-10 offset-sm-1'}>
                            <div 
                                ref={(element) => {
                                    this.SetRectSize(element);
                                }}
                                style={{
                                    width: `${this.state.rwidth}px`,
                                    height: `${this.state.rwidth}px`,
                                    marginTop: `${this.state.rwidth / 4}px`,
                                    marginBottom: `${this.state.rwidth / 4}px`
                                }}
                                className={'serviceContainer mx-auto d-flex flex-row justify-content-around align-items-stretch flex-wrap'}>
                                {this.GetServices()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}