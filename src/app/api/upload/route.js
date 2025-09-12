// src/app/api/upload/route.js
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        // Create uploads dir if it doesn’t exist
        const uploadDir = path.join(process.cwd(), "uploads");
        await mkdir(uploadDir, { recursive: true });

        // Build safe file path
        const filePath = path.join(uploadDir, file.name);

        console.log("📂 Saving to:", filePath);

        await writeFile(filePath, buffer);

        return NextResponse.json({ success: true, filename: file.name });
    } catch (err) {
        console.error("❌ Upload error:", err);
        return NextResponse.json(
            { error: "Upload failed", details: err.message },
            { status: 500 }
        );
    }
}
