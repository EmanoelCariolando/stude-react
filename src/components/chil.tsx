type Props = {
    text?: React.ReactNode,
    autor?: React.ReactNode;
}


export const Card = ({text,autor}: Props) => {
 return (
  <div className="flex items-center justify-center m-10">
 

  <div className=" h-40 w-80 flex flex-col justify-between border-2 border-gray-300 text-black">
        <div className="flex justify-center items-end h-1/1">
        <h1 className="font-bold text-2xl">"{text ? text : 'Adicione Uma Frase'}"</h1>
        </div>
        <div className="flex justify-end items-center h-1/1  ">
           <h3 className="flex justify-end items-end mr-1">- { autor ? autor : 'Autor Desconhecido'} </h3>
        </div>
   </div>

  </div>
 );
}