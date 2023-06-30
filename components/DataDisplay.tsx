import { Message } from "@/model/MessageProvider";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const DataDisplay = ({ data }: { data: { [key: string]: string }[] }) => {
  const [columns, setColumns] = useState<
    { title: string; dataIndex: string; key: string }[]
  >([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setColumns(
        Object.keys(data[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
      );
    }
  }, [data]);

  return (
    <DataContainer>
      <Table dataSource={data} columns={columns} scroll={{ y: 270 }} />
    </DataContainer>
  );
};

export default DataDisplay;
