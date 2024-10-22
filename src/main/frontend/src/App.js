import React, {useEffect,  useState } from 'react';
import './App.css';
import {useNavigate} from "react-router-dom";


function App() {

  //Newly added code to handle navigation.
  const navigate = useNavigate();
  const navigateToPage2 = () => {
    navigate('/page2');
  } //end

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

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
        // Extract response as plain text
        const text: string = await response.text();
        // Corrected: Set the response text to the message state variable.
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
          <h1>Personalized Greeting</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </div>
            <div>
            <label>Last Name:</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} // Update state with input
                required
            />
        </div>
  <button type="submit">Submit</button>
          <div> //Newly added code
          <button onClick={navigateToPage2}>Page 2</button>
          </div> //end
</form>

  {/* Display the message */}
  {message && <p>{message}</p>}
</div>
  );
}

export default App;
