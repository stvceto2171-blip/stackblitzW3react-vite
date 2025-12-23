import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
    <tr>
      <td>JOSHUA</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  <>
    <h1>Bon Jour Le Monde. Je m'appelle REACT . je suis une machine a grande puissance</h1>
    {myelement}
  </>
)