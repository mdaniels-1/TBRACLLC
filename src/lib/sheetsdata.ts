import { google } from 'googleapis';

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const CREDENTIALS = process.env.GOOGLE_SERVICE_CREDENTIALS_PATH;
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS,
  scopes: SCOPES,
});

/**
 * Connect to google sheet and fetch specific columns and rows
 */


export async function fetchRangeFromSheet(range: string) {
    const sheets = google.sheets({ version: "v4", auth });

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });
    const rows = res.data.values;

    if (!rows || rows.length === 0) {
        return [];
    }

    const filtered = rows.filter((row) =>
        row.some((cell) => cell && cell.trim() !== "")
    );
    return filtered;

}




export type Project = {
    name: string,
    address: string,
    desc: string,
    cost_info: string,
    year: string,
    area?: number,
    scope?: string, 
    notes?: string,
    image_url: string
}

/**
 * Convert raw sheet data to type Project
 * @param row Row from sheet which represents a singular project
 * @returns 
 */
export function mapRowToProject(row: string[]): Project {
  const [
    name,
    address,
    desc,
    cost_info,
    year,
    areaStr,
    scope,
    notes,
    image_urlRaw
  ] = row;

  return {
    name: name || "",
    address: address || "",
    desc: desc || "",
    cost_info: cost_info || "",
    year: year || "",
    image_url: image_urlRaw?.trim() || "",

    // Optional fields
    area: areaStr ? Number(areaStr) : undefined,
    scope: scope || undefined,
    notes: notes || undefined
  };
}


/**
 * Data to be used for 'Projects' page
 * @returns List of Projects from google sheet.
 */
export async function fetchProjectData(): Promise<Project[]> {
    // Range needs to match that of google sheet
    const range = "Project!A2:I"
    let data = await fetchRangeFromSheet(range);
    // Convert into list of Projects
    const projects: Project[] = data.map(mapRowToProject);
    return projects;
}