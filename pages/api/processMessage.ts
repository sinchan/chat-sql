import { NextApiRequest, NextApiResponse } from "next";
import { createCompletion } from "@/lib/OpenAICompletion";
import runQuery from "@/lib/runQuery";
import generateSQL from "@/lib/generateSQL";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { message } = JSON.parse(req.body);

    const query = await generateSQL(message);
    console.log("mes1", query);
    // return res.status(200).json({ data: query });

    const result = await runQuery(query);
    if (result.error) {
      res.status(500).json({ error: result.error });
    } else {
      res.status(200).json({ data: result.data, sql: query });
    }
  } else {
    res.status(405).end(); //Method not allowed
  }
};

export default handler;
