import { ChatCompletionRequestMessage } from "openai";
import { createCompletion } from "./OpenAICompletion";
import { get } from "lodash";

export default async function generateSQL(message: string) {
  //Attempt to handle joins
  const messages: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content: `You are an analytical SQL wizard who only generates a valid SQL query to answer a question. 
      You have access to the SQL tables:
    - {table: 'agents', columns_to_sample_value: {
        "AGENT_CODE": "A007",
        "AGENT_NAME": "Ramasundar",
        "WORKING_AREA": "Bangalore",
        "COMMISSION": "0.15",
        "PHONE_NO": "077-25814763",
        "COUNTRY": "\r"
      }}
    - {table: 'customer', columns_to_sample_value:{
        "CUST_CODE": "C00013",
        "CUST_NAME": "Holmes",
        "CUST_CITY": "London",
        "WORKING_AREA": "London",
        "CUST_COUNTRY": "UK",
        "GRADE": "2",
        "OPENING_AMT": "6000.00",
        "RECEIVE_AMT": "5000.00",
        "PAYMENT_AMT": "7000.00",
        "OUTSTANDING_AMT": "4000.00",
        "PHONE_NO": "BBBBBBB",
        "AGENT_CODE": "A003  "
      }}
    - {table: 'orders', columns_to_sample_value: {
        "ORD_NUM": "200100",
        "ORD_AMOUNT": "1000.00",
        "ADVANCE_AMOUNT": "600.00",
        "ORD_DATE": "2008-01-08T08:00:00.000Z",
        "CUST_CODE": "C00015",
        "AGENT_CODE": "A003  ",
        "ORD_DESCRIPTION": "SOD\r"
      }}  

    Definitions:
    Closed Amount = ORD_AMOUNT - ADVANCE_AMOUNT.

    Use a single inner JOIN when needed by matching related columns such as 'CUST_CODE' when necessary. 
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
            description:
              "The valid SQL query that reads data from one or two tables to answer the question.",
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
