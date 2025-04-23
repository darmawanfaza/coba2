/* Gaya umum */
body {
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom, #fffbea, #f8e5b5);
  color: #4b4b4b;
  margin: 0;
  padding: 0;
  text-align: center;
}

/* Header */
header {
  background-color: #b8860b;
  color: white;
  padding: 1.5em 0;
  border-bottom: 4px solid #ffd700;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Navigation */
nav a {
  color: white;
  margin: 0 1em;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em;
  transition: color 0.3s, background-color 0.3s;
}
nav a:hover {
  background-color: #ffd700;
  color: #4b4b4b;
  border-radius: 8px;
}

/* Main content */
main {
  padding: 2em;
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffd700;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* Article */
article {
  margin-bottom: 2em;
  padding: 1em;
  border-left: 4px solid #b8860b;
  background-color: #fffaf0;
  border-radius: 6px;
}

/* Footer */
footer {
  background-color: #b8860b;
  color: white;
  padding: 1em 0;
  border-top: 4px solid #ffd700;
}

/* Button */
button {
  background-color: #ffd700;
  border: none;
  padding: 0.8em 1.5em;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #e6c200;
  color: #4b4b4b;
}
