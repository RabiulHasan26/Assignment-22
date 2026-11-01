import { useState, useRef } from 'react';

function Home() {
  // Background Color
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = () => {
    setBgColor(bgColor === 'white' ? 'lightblue' : 'white');
  };

  // useRef
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const showValue = () => {
    setInputValue(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
    });

    setSubmittedData(null);
  };

  // Object State
  const [user, setUser] = useState({
    name: 'Rahim',
    email: 'rahim@gmail.com',
  });

  const updateName = () => {
    setUser({
      ...user,
      name: 'Karim',
    });
  };

  // Array State
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript']);

  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    const skill = newSkill.trim();

    if (!skill) return;

    setSkills([...skills, skill]);
    setNewSkill('');
  };

  return (
    <div className="home-container" style={{ backgroundColor: bgColor }}>
      <h1>Welcome to User Directory App!</h1>

      <p>Practice React Hooks and State.</p>

      <button onClick={changeBackground}>Change Background Color</button>

      <hr />

      <h2>useRef Practice</h2>

      <input type="text" ref={inputRef} placeholder="Enter your name" />

      <div>
        <button onClick={showValue}>Show Value</button>
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <h3>Your Input: {inputValue}</h3>

      <hr />

      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {submittedData && (
        <div className="user-info">
          <h3>Submitted User Information</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}

      <hr />

      <h2>Object State Practice</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button onClick={updateName}>Update Name</button>

      <hr />

      <h2>Array State Practice</h2>

      <input
        type="text"
        placeholder="Enter a new skill"
        value={newSkill}
        onChange={e => setNewSkill(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <h3>My Skills:</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
