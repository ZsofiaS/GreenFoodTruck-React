import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  Line,
  ComposedChart,
  Legend,
} from 'recharts';
import { fetchOrders } from '../store/actions/order';
import '../App.scss';

const Sales = () => {
  const reports = useSelector((state) => state.order.reports);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <section className="App-chart">
      <ResponsiveContainer width="95%" height={250}>
        <ComposedChart
          data={reports}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical="false" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            formatter={(value, name) => {
              if (name === 'total') {
                return `£${value}`;
              }
              return value;
            }}
          />
          <Legend />
          <Bar
            type="monotone"
            dataKey="total"
            fill="gainsboro"
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="croissant"
            stroke="#8884d8"
            fill="#8884d8"
            dot={false}
            strokeWidth={2}
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="coffee"
            fill="green"
            stroke="green"
            dot={false}
            strokeWidth={2}
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="choc"
            fill="pink"
            stroke="pink"
            dot={false}
            strokeWidth={2}
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="cappuccino"
            fill="darkgrey"
            stroke="darkgrey"
            dot={false}
            strokeWidth={2}
            animationDuration={2000}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Sales;
