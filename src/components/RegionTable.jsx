import { Table } from "antd";
import { useGetAllRegionQuery } from "../redux/api/region/regionSlice";
import { useState } from "react";
const columns = [
  Table.SELECTION_COLUMN,
  {
    title: "Sl. No.",
    dataIndex: "serial",
    width: 150,
  },
  {
    title: "Region",
    dataIndex: "name",
    // width: 150,
  },
];
// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

const RegionTable = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: RegionData,
    isError,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetAllRegionQuery({ limit: limit, page: 1 });

  const newData = [];

  RegionData?.region?.map((region, index) => {
    newData.push({
      ...region,
      serial: index + 1,
    });
  });
  console.log(newData);
  console.log(RegionData, isError, isFetching, isLoading, isSuccess);
  return (
    <div>
      <Table
        columns={columns}
        rowSelection={{}}
        dataSource={newData}
        // pagination={{
        //   pageSize: 50,
        // }}
        pagination={{
          current: 1,
          pageSize: limit,
          total: RegionData?.length,
          onChange: (pageSizeOptions) => {
            console.log(pageSizeOptions);
            setLimit(pageSizeOptions);
          },
          //   pageSizeOptions: 20,
        }}
        // scroll={{
        //   y: 240,
        // }}
      />
    </div>
  );
};

export default RegionTable;
