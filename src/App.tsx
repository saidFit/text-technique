import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import ShowData from './components/ShowData';
import ClientForm from './components/ClientForm';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';
import newRequest from './utils/NewRequest';
import { Data } from './utils/dataType';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {

  const [TypeButton,setTypeButton] = useState<string>("clientForm");
  const [data,setData] = useState<Data[] | null>([]);
  const [name,setname] = useState<any>('');

  const fetchData = async (): Promise<Data[]> => {

    try {
        
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"token of user"}`,
          },
      };

      // TODO----get all products-----//
      const {data} = await newRequest.get('apiOfData',config);
        return data;
    } catch (error) {
      throw error;
    }

  }

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData(); 
  }, []); 


  return(
   
    <section className='w-full'>
      <div className='flex mx-left space-x-4 p-3 w-fit'>
        <button onClick={() => setTypeButton('clientForm')} className='bg-gray-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-gray-400'>Sign up</button>
        <button onClick={() => setTypeButton('categoryForm')} className='bg-green-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-green-400'>Add a Category</button>
        <button onClick={() => setTypeButton('productForm')} className='bg-red-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-red-400'>Add Product</button>
        <button onClick={() => setTypeButton('showData')} className='bg-red-300 rounded-md py-1 px-3 transition-all duration-200 hover:bg-red-400'>show data</button>
      </div>
      <div>
    {TypeButton == "clientForm" && <ClientForm />}  
    {TypeButton == "productForm" && <ProductForm />}  
    {TypeButton == "categoryForm" && <CategoryForm />}  
    {TypeButton == "showData" && <ShowData data={data}/>}  

    </div>
    </section>
    

  );
};

export default App;
