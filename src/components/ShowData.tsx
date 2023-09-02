import * as React from 'react';

interface IShowDataProps {
    data:any[] | null
}

const ShowData: React.FunctionComponent<IShowDataProps> = (props) => {
    if(props.data) return(
       <h1>data valid</h1>
  )
  return(
    <p>loading2...</p>
  )
  
};

export default ShowData;
