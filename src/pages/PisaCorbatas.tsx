import { useState } from 'react';
// import { useCart } from './context/CartContext';

import wppIcon from '../imagenes/logo/wassa.png';


import cascoImg from '../imagenes/auriculares_casco/Designer.png';



import './css/Baquetas.css';
// import { formatCOP } from './utils/pricing';

interface Producto {
  id: number;
  nombre: string;
  imagenes: string[];
  wpp: string;
  precio: number; // 👈 precio base propio
}


const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Auriculares para Casco Moto',
    imagenes: [cascoImg],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares para casco de moto por $47.500. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 47500,
  },
];



export default function PisaCorbatas() {
// const { addItem, items } = useCart();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<string[]>([]);

  const abrirModal = (imagenes: string[]): void => {
    setImagenesSeleccionadas(imagenes);
    setModalOpen(true);
  };

  const cerrarModal = (): void => {
    setModalOpen(false);
    setImagenesSeleccionadas([]);
  };

  return (
    <div className="productos">
      

   
      <div className="grid-productos">
        {productos.map((prod) => (
          <div
            key={prod.id}
            className="producto"
            onClick={() => abrirModal(prod.imagenes)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') abrirModal(prod.imagenes);
            }}
          >
            <img src={prod.imagenes[0]} alt={prod.nombre} />

            <p>{prod.nombre}</p>

     
           <p className="precio">
  ${prod.precio.toLocaleString('es-CO')}
</p>

        
          {/* BOTÓN: Agregar al combo
<button
  className="btn-combo"
  disabled={items.length >= 4}
  onClick={(e) => {
    e.stopPropagation();
    addItem({
      id: prod.id,
      nombre: prod.nombre,
      imagen: prod.imagenes[0],
      tipo: 'PisaCorbata',
      precioBase: prod.precio,
    });
  }}
>
  {items.length >= 4 ? 'Combo lleno (4)' : 'Agregar al combo'}
</button>
*/}

            {/* WhatsApp individual */}
            <a
              href={prod.wpp}
              target="_blank"
              rel="noopener noreferrer"
              className="wpp-btn"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Pedir por WhatsApp: ${prod.nombre}`}
              title="Pedir por WhatsApp"
            >
             <a
  href={prod.wpp}
  target="_blank"
  rel="noopener noreferrer"
  className="wpp-btn"
  onClick={(e) => e.stopPropagation()}
  aria-label={`Pedir por WhatsApp: ${prod.nombre}`}
  title="Pedir por WhatsApp"
>
  <img src={wppIcon} alt="WhatsApp" className="wpp-icon" />
</a>
              <span className="wpp-text">Pedir por WhatsApp</span>
            </a>
          </div>
        ))}
      </div>

      {/* Modal galería */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>
            &times;
          </span>

          <div className="modal-galeria" onClick={(e) => e.stopPropagation()}>
            {imagenesSeleccionadas.map((img, index) => (
              <img key={index} src={img} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
