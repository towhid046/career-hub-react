import { Bar, BarChart, XAxis, YAxis, Legend, CartesianGrid, Tooltip  } from "recharts";
const studentMarks = [
  { subject: "Mathematics", mark: 85, id: 33 },
  { subject: "Science", mark: 78, id: 60 },
  { subject: "History", mark: 92, id: 30 },
  { subject: "English", mark: 28, id: 23 },
];

const LChart = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <BarChart width={500} height={250} data={studentMarks}>
      <CartesianGrid strokeDasharray="3 3" />
        <Legend/>
        <XAxis dataKey='subject' />
        <YAxis />
        <Tooltip/>
        <Bar dataKey="mark" fill="#8884d8" />
        <Bar dataKey="id" fill="#d35400" />
      </BarChart>
    </div>
  );  
};

export default LChart;
