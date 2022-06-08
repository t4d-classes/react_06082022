export const CarTool = () => {

  const cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 48000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000 },
  ];

  return (
    <>
    <header>
      <h1>Car Tool</h1>
    </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );

};