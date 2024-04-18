/* eslint-disable no-unused-vars */
import faceIO from '@faceio/fiojs'
import { useEffect } from 'react';
const App = () => {
  const faceio = new faceIO('fioa7f9d');
  useEffect(()=>{
        const faceio = new faceIO('fioa7f9d')
        console.log('FaceIO initialized');
  }, [])

  const handleRegister =  () => {
      const enrollOptions = {
        locale: 'auto',
        payload: { 
          email: 'user@example.com' ,
          pin: '1234',
        },
      };
        faceio.enroll(enrollOptions)
        .then((response) => {
          console.log(` Unique Facial ID: ${response.facialId}
          Enrollment Date: ${response.timestamp}
          Gender: ${response.details.gender}
          Age Approximation: ${response.details.age}`);
          })
          .catch((error) => {
            console.error('Failed to enroll user:', error);
          });
        };

      const handleLogin = () => {
        faceio.authenticate({
          locale:'auto'
        }).then((response) => {
          console.log(`Facial ID: ${response.facialId}
          Authentication Date: ${response.timestamp}`);
        }).catch((error) => {
          console.error('Failed to authenticate user:', error);
        });

    };
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="my-4 ">FaceIORecuerdame Authentication</h1>
      <div className="flex gap-4 col-6 mx-auto my-4  p-4">
        <button className="btn btn-primary border rounded-lg p-3 hover:bg-slate-300" onClick={handleRegister}>
          Register
        </button>
        <button className="btn btn-success border rounded-lg p-3 hover:bg-slate-300" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default App;