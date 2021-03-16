import axios from "axios";
import React, { useEffect, useState } from "react";

interface ITRL {
  id: number;
  name: string;
  description?: any;
}

const TRLPage = () => {
  const [trls, setTrls] = useState<ITRL[]>();

  useEffect(() => {
    const getTrls = async () => {
      try {
        const { data } = await axios.get("https://api-test.innoloft.com/trl/");
        setTrls(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrls();
  }, []);

  if (!trls) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {trls?.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TRLPage;
