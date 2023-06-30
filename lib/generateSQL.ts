import { ChatCompletionRequestMessage } from "openai";
import { createCompletion } from "./OpenAICompletion";
import { get } from "lodash";

export default async function generateSQL(message: string) {
  //Attempt to handle joins
  const messages: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content: `You generate a valid SQL query to answer a question. You have access to the SQL tables:
    - {table: 'agents', columns: ['AGENT_CODE', 'AGENT_NAME', 'WORKING_AREA', 'COMMISSION', 'PHONE_NO', 'COUNTRY']}
    - {table: 'customer', columns: ['CUST_CODE', 'CUST_NAME', 'CUST_CITY', 'WORKING_AREA', 'CUST_COUNTRY', 'GRADE', 'OPENING_AMT', 'RECEIVE_AMT', 'PAYMENT_AMT', 'OUTSTANDING_AMT', 'PHONE_NO', 'AGENT_CODE']}
    - {table: 'orders', columns: ['ORD_NUM', 'ORD_AMOUNT', 'ADVANCE_AMOUNT', 'ORD_DATE', 'CUST_CODE', 'AGENT_CODE', 'ORD_DESCRIPTION']}

    Example Rows:
    - {table: 'agents', columns: ['A007', 'Ramasundar', 'Bangalore', 0.15, '077-25814763', 'India']}
    - {table: 'customer', columns: ['C00013', 'Holmes', 'London', 'London', 'UK', 2, 6000, 5000, 7000, 4000, 'BBBBBBB', 'A003']}
    - {table: 'orders', columns: [200100, 1000, 600, '2008-05-20', 'C00013', 'A003', 'SOD']}
    `,
    },
    {
      role: "user",
      content: `Generate SQL for the question: ${message}`,
    },
  ];

  const functions = [
    {
      name: "run_SQL",
      description: "Run a valid SQL query to answer the question",
      parameters: {
        type: "object",
        properties: {
          sql: {
            type: "string",
            description: "The valid SQL query to run to answer the question",
          },
        },
        required: ["sql"],
      },
    },
  ];

  const result = await createCompletion(messages, functions);
  const sqlObjectString = get(
    result,
    "data.choices[0].message.function_call.arguments",
    "{}"
  );

  try {
    const { sql } = JSON.parse(sqlObjectString);
    return sql;
  } catch (err: any) {
    console.log("Error parsing the SQL query.", err);
    return { error: "Something went wrong (101)" };
  }
}
