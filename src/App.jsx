import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Titulo from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
    <Titulo/>
    <div className='contenedor'>
      <MyCard
        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRV91CpAw9oPL5EaVAsZzOAFRwncSYWZ4sy26BgsSgdNs-7dL9nHx6_x7xz3lhI0bEBxF76K_V5s9NwIefNy7M0lIYTMwkT3uCqz6o7H6amsvo0e0WtQrDnx3EYiHhmI-7LVaF9xpg&usqp=CAc"
        title="Proteína Vegetal"
        paragraph="Producto enfocado en las personas que no consumen derivados animales"
        tagColor="green"
        tagText="Producto Vegano"
      />
      <MyCard
        image="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02385/y/37.jpg"
        title="Creatina MuscleTech"
        paragraph="Excelente producto para una rapida mejora en el rendimiento"
        tagColor="blue"
        tagText="Producto Importado"
      />
      <MyCard
        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9KpTDHPXGXrHZ-8reVlAVxIXDALe7NnoMie2afrcN3XnfsGDbq0GSs8ExdO3qm4HrsIUviOb7Vr6JAU6HmzTMWegazMkTcRQqCigDXjJx_BEVS8E15sWkf3MHaFdSVQFKw-9RZA&usqp=CAc"
        title="Proteína Cookies And Cream"
        paragraph="No dejes de lado un buen sabor mientras construyes músculo"
        tagColor="red"
        tagText="Producto Exclusivo"
      />
      <MyCard
        image="https://www.suplextreme.cl/wp-content/uploads/2024/02/pre-entreno-dragon-pharma-venom-inferno-40-servicios-chile-suplextreme.webp"
        title="Pre entreno"
        paragraph="Suele ser consumido unos minutos antes del entrenamiento"
        tagColor="yellow"
        tagText="Producto Especial"
      />
      </div>
      <Footer/>
    </>
  );
}
export default App;