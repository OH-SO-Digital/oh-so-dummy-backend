import { NextApiRequest, NextApiResponse } from "next";
import { CarRange } from "@/types/EVTools";
import { evRangeData } from "@/dummyData/dummyData";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse<CarRange[]>) {
  return NextResponse.json(evRangeData);
}
