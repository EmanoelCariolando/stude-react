 type Props = {
  nome?: string;
  avatar?: string;
 }
 export const User = ({  
   nome,   
   avatar = "https://img.freepik.com/vetores-premium/icones-de-usuarios-inclui-icones-de-usuario-icones-do-pessoal-simbolos-e-elementos-de-design-grafico-de-qualidade-premium_981536-526.jpg?semt=ais_hybrid"
       
 }: Props) => {
  return (
   <div className="flex flex-col items-center justify-between">
    <h1 className="text-black">{nome}</h1>
    <img src={avatar} alt="Avatar" className="h-20 w-20" />

   </div>
          );
  

 }