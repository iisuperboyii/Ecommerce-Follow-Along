export const Login = () => {
  const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '300px',
          margin: '50px auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
      },
      label: {
          fontSize: '14px',
          fontWeight: 'bold',
      },
      input: {
          width: '100%',
          padding: '8px',
          marginTop: '5px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
      },
      button: {
          width: '100%',
          padding: '10px',
          marginTop: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#007bff',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
      },
      buttonHover: {
          backgroundColor: '#0056b3',
      },
  };

  const handleSubmit = () => {
      alert('Form Submitted!');
  };

  return (
      <div style={styles.container}>
          <label style={styles.label}>Username</label>
          <input type="text" placeholder="Enter Username" style={styles.input} />

          <label style={styles.label}>Password</label>
          <input type="password" placeholder="Enter Password" style={styles.input} />

          <button
              style={styles.button}
              onClick={handleSubmit}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
              Submit
          </button>
      </div>
  );
};