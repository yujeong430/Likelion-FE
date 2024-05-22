import axios from 'axios';

function App() {
  axios.post('https://reqres.in/api/login', {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <div>
      axios 서버 통신
    </div>
  );
}
export default App;
