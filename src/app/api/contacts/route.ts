import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("id", request.nextUrl.searchParams.get("id"));
  console.log("cookie", request.cookies.get("cookie-teste")?.value);

  const response = NextResponse.json(
    {
      create: true,
    },
    { status: 201 }
  );

  response.cookies.set("cookie-teste", "valor-cookie-teste");

  return response;
}
