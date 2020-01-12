import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Cita = (props, {cita}) => {
    // console.log("DEsde cita", cita);
    console.log("el nombre es", cita);
    if(!cita){
        props.history.push('/')
    }

    // extraer por props
    const { cita: {nombre} } = props;
    return ( 
        <Fragment>
            <h1>Nombre cita: {nombre} </h1>

            <div  className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5     d-flex              justify-content-center">
                        <Link to={'/'} className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold">Volver
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Cita);