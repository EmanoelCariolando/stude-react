import { peopleList } from "@/data/people";
 
const Page = () => {
  const devs = peopleList.filter(person => person.job === 'dev');

 return (
  <div className="flex flex-col items-center justify-between text-black">
   {devs.length > 0 &&
   <ul>
    <h2 className="text-gray-700 text-3xl">Desenvolvedores</h2>
    {devs.map(person => 
    <li>{person.name} - {person.job} - {person.age}</li>)}
   </ul>
   }
  
  </div>

)};
export default Page;