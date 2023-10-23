import { google } from "googleapis";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST request are allowed" });
  }

  const formDetails = req.body;

  try {
    const authentication = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth: authentication,
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            formDetails.myName,
            formDetails.email,
            formDetails.day,
            formDetails.how,
          ],
        ],
      },
    });

    res.status(200).json({
      status: true,
      data: response.data, // Use response.data instead of just response
      message: "Successfully submitted",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error?.message || "Something went wrong" });
  }
}
