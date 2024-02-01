import { Input, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useGetAllAreaQuery } from "../redux/api/area/areaSlice";
const columns = [
  Table.SELECTION_COLUMN,
  {
    title: "Sl. No.",
    dataIndex: "serial",
    width: 150,
  },
  {
    title: "Region",
    dataIndex: "region",
    render: (region) => <>{region?.name}</>,
    width: 200,
  },
  {
    title: "Area",
    dataIndex: "name",
  },
];

const AreaTable = () => {
  const [limit, setLimit] = useState(10);
  const { data: AreaData } = useGetAllAreaQuery({ limit: limit, page: 1 });
  const newData = [];

  AreaData?.area?.map((region, index) => {
    newData.push({
      ...region,
      serial: index + 1,
    });
  });
  const handleChange = (value) => {
    setLimit(value);
  };
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

export default AreaTable;
