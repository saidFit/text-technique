import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import ShowData from './components/ClientForm';
import ClientForm from './components/ClientForm';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {

  const [TypeButton,setTypeButton] = useState<string>("clientForm");


  // const [data,setData] = useState<any[] | null>(null);
  //  const api = "https://api.api-ninjas.com/v1/babynames?gender";
  //  const fetchData = async() =>{

  //    try {
        
  //       const {data} = await axios.get(api);
  //       setData(data);

  //    } catch (error) {
  //      throw error;
  //    }

  //  }

  return(
   
    <section className='w-full'>
      <div className='flex mx-left space-x-4 p-3 w-fit'>
        <button onClick={() => setTypeButton('clientForm')} className='bg-gray-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-gray-400'>Sign up</button>
        <button onClick={() => setTypeButton('categoryForm')} className='bg-green-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-green-400'>Add a Category</button>
        <button onClick={() => setTypeButton('productForm')} className='bg-red-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-red-400'>Add Product</button>
      </div>
      <div>
    {TypeButton == "clientForm" && <ClientForm />}  
    {TypeButton == "productForm" && <ProductForm />}  
    {TypeButton == "categoryForm" && <CategoryForm />}  

    </div>
    </section>
    

  );
};

export default App;
