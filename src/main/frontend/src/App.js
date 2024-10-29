import React, {useEffect,  useState } from 'react';
import './App.css';
import {useNavigate} from "react-router-dom";


const App = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };


  // Takes a function and a dependency array.
  //useEffect(() => { [Will need to confirm if this will need to be removed from the comment]
    const fetchMessage = async () => {
      try {

        // Fetch syntax with method and headers to make a POST request.
        const response: Response = await fetch('/hello/personalized', {
          method: 'POST', // Use POST method to send data
          headers: {
            'Content-Type': 'application/json', // Specify JSON content
          },
          // JSON.stringify usage to convert the body to JSON.
          body: JSON.stringify({first:firstName , last:lastName}),
        });

        // Extract response as plain text and Corrected: Set the response text to the message state variable.
        const text: string = await response.text();
        setMessage(text);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      fetchMessage();
    };

    return (
        <div className='App'>
          <header>
          <h1> Welcome to Food Exploration Page </h1>
          </header>
          <main>

          <form onSubmit={handleSubmit}>
            <input
                type="text"
               // placeholder="First Name"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
  <button type="submit">Submit</button>
          <div>
          <button onClick={navigateToDashboard}>Go to the Recipe Dashboard </button>
          </div>
</form>

  {message && <p>{message}</p>}
          </main>
</div>
  );
}

export default App;
























{/*    <div>*/}
{/*      <label>First Name:</label>*/}
{/*      <input*/}
{/*        type="text"*/}
{/*        value={firstName}*/}
{/*        onChange={(e) => setFirstName(e.target.value)}*/}
{/*        required*/}
{/*        />*/}
{/*    </div>*/}
{/*    <div>*/}
{/*    <label>Last Name:</label>*/}
{/*    <input*/}
{/*        type="text"*/}
{/*        value={lastName}*/}
{/*        onChange={(e) => setLastName(e.target.value)} // Update state with input*/}
{/*        required*/}
{/*    />*/}
{/*</div>*/}







// import React, { useState } from 'react';
// import './App.css';
//
// function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [message, setMessage] = useState('');
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/hello/personalized', {
//         const: response = await fetch("/hello/personalized", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ first:firstName, last:lastName }),
//         }),
//
//         if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//
//       const text = await response.text();
//       setMessage(text);
//     } catch (error); {
//         console.error('Error fetching message:', error);
//         setMessage('Failed to fetch message from server');
//       }
//     };
//
//     return (
//         <div className="App">
//           <header>
//             <h1>Personalized Greeting</h1>
//           </header>
//           <main>
//             <form onSubmit={handleSubmit}>
//               <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//               />
//               <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//               />
//               <button type="submit">Submit</button>
//             </form>
//             {message && <p className="message">{message}</p>}
//           </main>
//         </div>
//     );
//   }
// }
//
//
//
//
//
//
//
