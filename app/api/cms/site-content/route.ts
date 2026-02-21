export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { getSiteContent, updateSiteContent } from "@/lib/cms";

export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("GET /api/cms/site-content failed:", error);
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }
    const updated = await updateSiteContent(body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/cms/site-content failed:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
