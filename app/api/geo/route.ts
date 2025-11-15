import { NextResponse, type NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

export async function GET(request: NextRequest) {
  const geo = await geolocation(request);

  return NextResponse.json(geo);
}
