import wppIcon from '../imagenes/logo/wassa.png';


import { useState } from 'react';
// import { useCart } from './context/CartContext';
import airpodsImg from '../imagenes/appol/airpods3pro.jpeg';
import airpodsImg2 from '../imagenes/appol/airpods2pro.png';
import airpods4Img from '../imagenes/appol/airpods4.png';
import airpods3Img from '../imagenes/appol/airpods3.png';
import twsImg from '../imagenes/appol/tws.png';

import './css/Baquetas.css';


interface Producto {
  id: number;
  nombre: string;
  imagenes: string[];   // 👈 CAMBIO CLAVE
  wpp: string;
  precio: number;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'AirPods Pro 3',
    imagenes: [airpodsImg],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares AirPods Pro 3 por $75.000. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 75000,
  },
  {
    id: 2,
    nombre: 'AirPods Pro 2',
    imagenes: [airpodsImg2],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares AirPods Pro 2 por $65.000. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 65000,
  },
  {
    id: 3,
    nombre: 'AirPods Serie 4',
    imagenes: [airpods4Img],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares AirPods Serie 4 por $68.000. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 68000,
  },
  {
    id: 4,
    nombre: 'AirPods Serie 3',
    imagenes: [airpods3Img],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares AirPods Serie 3 por $58.000. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 58000,
  },
  {
    id: 5,
    nombre: 'Auriculares TWS',
    imagenes: [twsImg],
    wpp: `https://wa.me/573218275703?text=${encodeURIComponent(
      'Hola, estoy interesado en los auriculares TWS por $23.000. ¿Está disponible? Me gustaría comprarlos.'
    )}`,
    precio: 23000,
  },
];



export default function Pines() {
// const { addItem, items } = useCart();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>('');

  const abrirModal = (imagen: string): void => {
    setImagenSeleccionada(imagen);
    setModalOpen(true);
  };

  const cerrarModal = (): void => {
    setModalOpen(false);
    setImagenSeleccionada('');
  };

  return (
    <div className="productos">
    

    

      <div className="grid-productos">
        {productos.map((prod) => (
          <div
            key={prod.id}
            className="producto"
          onClick={() => abrirModal(prod.imagenes[0])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
             if (e.key === 'Enter' || e.key === ' ')
  abrirModal(prod.imagenes[0]);
            }}
          >
          <div className="producto-imagenes">
  {prod.imagenes.map((img, i) => (
    <img key={i} src={img} alt={prod.nombre} />
  ))}
</div>

            <p>{prod.nombre}</p>

       <p className="precio">
  ${prod.precio.toLocaleString('es-CO')}
</p>
         

            {/* BOTÓN: Agregar al combo */}
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
      tipo: 'Pin',
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
  <img src={wppIcon} alt="WhatsApp" className="wpp-icon" />
</a>



          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>
            &times;
          </span>

          <img
            src={imagenSeleccionada}
            alt="Producto"
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}