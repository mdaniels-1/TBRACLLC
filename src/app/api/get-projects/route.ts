import { fetchProjectData } from "@/lib/sheetsdata";
import { NextResponse } from "next/server";

/**
 * Proxy route to fetch projects from Google Sheets
 * @param req 
 * @returns 
 */
export async function GET() {
    const projects = await fetchProjectData();
    return NextResponse.json({projects});
}