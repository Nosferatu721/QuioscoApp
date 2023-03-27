import Image from 'next/image';
import Categoria from './Categoria';
import useQuiosco from '@/hooks/useQuiosco';

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image width={150} height={150} className="m-auto" src="/assets/img/logo.svg" alt="Imagen Logotipo" />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
