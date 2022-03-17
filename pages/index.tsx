import type { NextPage } from "next";
import { CardButton } from "../components/CardButton";
import { Layout } from "../components/layouts/Layout";
import { cardItems, tableItems } from "../lib/constants";

const Home: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <h1 className="font-bold text-3xl mb-8">Dashboard</h1>

      <section className="grid grid-cols-4 gap-3 mb-20">
        {cardItems.map((item, idx) => (
          <CardButton key={idx} title={item.title} count={item.count} />
        ))}
      </section>

      <table className="text-left bg-grey-50 w-full shadow-md">
        <thead className="bg-avocado-200 text-white">
          <tr>
            <th className="p-4">Request Type</th>
            <th className="p-4">Employee ID</th>
            <th className="p-4">Employee Name</th>
            <th className="p-4">Department</th>
            <th className="p-4">Position</th>
            <th className="p-4">Date Requested</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, idx) => (
            <tr key={idx} className="border-b border-grey-300 last:border-b-0">
              <td className="p-4">{item.requestType}</td>
              <td className="p-4">{item.employeeID}</td>
              <td className="p-4">{item.employeeName}</td>
              <td className="p-4">{item.department}</td>
              <td className="p-4">{item.position}</td>
              <td className="p-4">{item.dateRequested}</td>
              <td className="p-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Home;
