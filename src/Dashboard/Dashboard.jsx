import Intensity from "../Pages/Intensity/Intensity";
import Likelihood from "../Pages/Likelihood/Likelihood";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="border rounded-md p-1 shadow-sm">
        <Intensity />
      </div>
      <div className="border rounded-md p-1 shadow-sm">
        <Likelihood />
      </div>
      <div className="border rounded-md p-1 shadow-sm">
        <Intensity />
      </div>
    </div>
  );
};

export default Dashboard;
