import Image from 'next/image';
import Categoria from './Categoria';
import useQuiosco from '@/hooks/useQuiosco';

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen Logotipo" />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
