import { Input, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
  },
];

const RegionTable = () => {
  const [limit, setLimit] = useState(10);
  const { data: RegionData } = useGetAllRegionQuery({ limit: limit, page: 1 });

  const newData = [];

  RegionData?.region?.map((region, index) => {
    newData.push({
      ...region,
      serial: index + 1,
    });
  });
  const handleChange = (value) => {
    setLimit(value);
  };
  //   console.log(newData);
  //   console.log(RegionData, isError, isFetching, isLoading, isSuccess);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "16px",
          marginBottom: "24px",
          alignItems: "center",
        }}
      >
        <div>
          <Input
            size="large"
            placeholder="Search..."
            style={{
              width: "227px",
              height: "36px",
            }}
            prefix={<SearchOutlined />}
          />
        </div>
        <div>
          <Select
            defaultValue={10}
            style={{
              width: 290,
              height: 36,
              borderRadius: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: 10,
                label: 10,
              },
              {
                value: 20,
                label: 20,
              },
              {
                value: 30,
                label: 30,
              },
              {
                value: 50,
                label: 50,
              },
              {
                value: 100,
                label: 100,
              },
              {
                value: 150,
                label: 150,
              },
            ]}
          />
        </div>
      </div>
      <Table
        columns={columns}
        rowSelection={{}}
        dataSource={newData}
        pagination={{
          position: ["none"],
          pageSize: limit,
        }}
      />
    </div>
  );
};

export default RegionTable;
