import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { randomUUID } from "crypto";

const MAX_BYTES = 5 * 1024 * 1024;

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image uploads are allowed" }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "File is too large (max 5MB)" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name || "").toLowerCase();
    const safeExt = ext && ext.length <= 10 ? ext : "";
    const filename = `${randomUUID()}${safeExt ? safeExt : ""}`;
    const safeName = sanitizeFilename(filename);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, safeName);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ url: `/uploads/${safeName}` });
  } catch (error) {
    console.error("POST /api/cms/upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
