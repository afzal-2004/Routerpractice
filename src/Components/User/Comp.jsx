import { useParams } from "react-router-dom";

const Use = () => {
  const { id } = useParams();
  return <div className=" text-center">User : {id} </div>;
};

export default Use;
