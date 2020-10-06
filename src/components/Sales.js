import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  Area,
  ComposedChart,
  Legend,
} from 'recharts';
import { useHistory } from 'react-router';
import { fetchOrders } from '../store/actions/order';
import '../styles/Sales.scss';
import { auth } from '../firebase/firebaseConfig';

const Sales = () => {
  const reports = useSelector((state) => state.order.reports);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push('/');
      } else {
        console.log(user.email);
      }
    });
    dispatch(fetchOrders());
  }, [dispatch, history]);

  return (
    <>
      <section className="Sales">
        <div className="Sales-chart">
          <h1>Total sales (£)</h1>
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart
              data={reports}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="date" stroke="lightgray" />
              <YAxis stroke="lightgray" />
              <Tooltip
                formatter={(value, name) => {
                  if (name === 'total') {
                    return `£${value}`;
                  }
                  return value;
                }}
              />
              <Legend align="center" />
              <Area
                type="monotone"
                dataKey="total"
                fill="gold"
                stroke="orange"
                animationDuration={2000}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="Sales-chart">
          <h1>Total products sold (pc)</h1>
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart
              data={reports}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="date" stroke="lightgray" />
              <YAxis stroke="lightgray" />
              <Tooltip
                formatter={(value, name) => {
                  if (name === 'total') {
                    return `£${value}`;
                  }
                  return value;
                }}
              />
              <Legend align="center" iconType="diamond" />
              <Line
                type="monotone"
                dataKey="croissant"
                stroke="orange"
                dot={false}
                strokeWidth={2}
                animationDuration={2000}
              />
              <Line
                type="monotone"
                dataKey="coffee"
                stroke="gold"
                dot={false}
                strokeWidth={2}
                animationDuration={2000}
              />
              <Line
                type="monotone"
                dataKey="choc"
                stroke="chocolate"
                dot={false}
                strokeWidth={2}
                animationDuration={2000}
              />
              <Line
                type="monotone"
                dataKey="cappuccino"
                stroke="tan"
                dot={false}
                strokeWidth={2}
                animationDuration={2000}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
};

export default Sales;
