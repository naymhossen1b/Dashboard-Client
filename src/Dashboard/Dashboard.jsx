import useMainData from "../Hooks/useMainData";

const Dashboard = () => {

  const [mainData] = useMainData()
  console.log(mainData);

  return (
    <div>
      <p>{mainData?.length}</p>
    </div>
  );
};

export default Dashboard;
