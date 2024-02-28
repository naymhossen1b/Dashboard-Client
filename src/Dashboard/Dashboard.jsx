import Intensity from "../Pages/Intensity/Intensity";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8"> 
      <div>
        <Intensity />
      </div>
      <div>
        <Intensity />
      </div>
      <div>
        <Intensity />
      </div>
    </div>
  );
};

export default Dashboard;
