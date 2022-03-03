import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOverview } from "../../../services/player";
import Category from "./Category";
import TableRow from "./TableRow";

export default function Overview() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await getOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log("data :", response);
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => {
                return (
                  <Category nominal={item.value} icon="icon-desktop">
                    {item.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <TableRow
                      title={item.historyVoucherTopup.gameName}
                      image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                      category={item.historyVoucherTopup.category}
                      item={item.historyVoucherTopup.coinQuantity}
                      itemName={item.historyVoucherTopup.coinName}
                      price={item.value}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
