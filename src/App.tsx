import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import ShowData from './components/ShowData';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [data,setData] = useState<any[] | null>(null);
   const api = "https://api.api-ninjas.com/v1/babynames?gender";
   const fetchData = async() =>{

     try {
        
        const {data} = await axios.get(api);
        setData(data);

     } catch (error) {
       throw error;
     }

   }

  return(
   
    <ShowData data={data}/>

  );
};

export default App;
