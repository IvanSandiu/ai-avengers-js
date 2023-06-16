'use client';
 
import { useEffect, useState } from 'react'; 
import { peticionVehiculos, peticionMarcas } from './components/apiAux';

const Page = () => {

  const [vehiculos, setVehiculos] = useState([]);
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vehiculosData = await peticionVehiculos();
      const marcasData = await peticionMarcas();
      setVehiculos(vehiculosData);
      setMarcas(marcasData);
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    // Lógica para manejar el clic en el botón
    console.log(`Se hizo clic en el botón del vehículo con ID ${id}`);
  };

  return (
    <div>
      {vehiculos.map((vehiculo) => (
        <div key={vehiculo.id} className="card">
          <h4>{vehiculo.modelo}</h4>
          <p>{marcas.find((marca) => marca.id === vehiculo.idMarca)}</p>
          <p>{vehiculo.precio}</p>
          <button onClick={() => handleClick(vehiculo.id)}>Botón</button>
        </div>
      ))}
    </div>
  );
};

export default Page;

