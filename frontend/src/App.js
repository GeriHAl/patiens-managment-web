import React, { Fragment, useEffect, useState } from 'react'; // Hooks
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import appStyle from './App.css';

// import cliente de Axios
//import clienteAxios from './config/axios';

// Componentes
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

  const [appointmentsList, addAppointments] = useState([]); 

  // Realiza ciertas operaciones cuando el state cambia
  useEffect( () => {
    console.log('Listo');
  });

  const createAppointment = app => {
    addAppointments([
      ...appointmentsList,
      app
    ])
  }

  const deleteAppointment = id =>{
    const newAppointments = appointmentsList.filter(apo => apo.id !== id); //return a new array
    addAppointments(newAppointments);
  }

  const title = appointmentsList.length === 0 ? 'No appointments' : 'Manage Appointments';
  

  return (
    <Fragment>
      <h1 className="p-5">Welcome to Dr. Pets</h1>
      <div className="container mt-5">
        <div className="row appStyle">
          <div className="col">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="col">
            <h2 className="text-center">{title}</h2>
             {appointmentsList.map( appointment => (
               <Appointment 
                 key={appointment.id}
                 appointment={appointment}
                 deleteAppointment={deleteAppointment}
               />
             ))}
        
          </div>

        </div>

      </div>
    </Fragment>
    // <Router>
    //   <Switch>
    //     <Route 
    //       exact 
    //       path="/" 
    //       component={ () => <Pacientes citas={citas} />}
    //     />
    //     <Route 
    //       exact 
    //       path="/new" 
    //       component={ () =>  <NuevaCita guardarConsulta={guardarConsulta} />} // Para pasar props a componentes
    //     />
    //     <Route 
    //       exact 
    //       path="/cita/:id" 
    //       // render permite poner codigo con callback
    //       render={(props) =>{
    //         // HOF Higher Order Function
    //         console.log(props.match.params.id);
    //         const cita = citas.filter(cita => cita._id === props.match.params.id)

    //         return(
    //           <Cita 
    //           cita={cita[0]} 
    //           guardarConsulta={guardarConsulta}
    //           />
    //         )
    //       }}

    //     />
    //   </Switch>
    // </Router>
  );
}

export default App;
