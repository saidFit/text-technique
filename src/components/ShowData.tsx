import * as React from 'react';
import { Data } from '../utils/dataType';

interface IShowDataProps {
    data:Data[] |null,


}

const ShowData: React.FunctionComponent<IShowDataProps> = (props) => {
    const {data} = props;
  return(
    <div>
      {data?.map((item:Data,ind:number) =>{
        return(
            <div>
                <h1>{item.name}</h1>
                <p>{item.category}</p>
                <p>{item.stock}</p>

            </div>
        )
      })}
   
    </div>
  );
};

export default ShowData;
