import AsideListItem from '../AsideListItem';

export default function Aside() {

  return (
    <aside className="hidden w-72 h-[91.5vh] bg-slate-900 text-slate-200 shadow-lg lg:flex flex-col z-10 overflow-hidden sticky top-20 left-0">
      <nav>
        <ul>
          <AsideListItem title='Home' path='/' />
          <AsideListItem title='Calcular Simples Nacional' path='/simples-nacional' />
          <AsideListItem title='Calcular PIS/COFINS' path='/pis-cofins' />
          <AsideListItem title='Pesquisar CNAE' path='/search-cnae' />
        </ul>
      </nav>
    </aside>
  );
}
