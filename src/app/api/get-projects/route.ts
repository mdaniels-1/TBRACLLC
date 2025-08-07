import { fetchProjectData } from "@/lib/sheetsdata";
import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy route to fetch projects from Google Sheets
 * @param req 
 * @returns 
 */
export async function GET(req: NextRequest) {
    const projects = await fetchProjectData();
    return NextResponse.json({projects});
}