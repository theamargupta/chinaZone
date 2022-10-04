export async function getStories() {
  if (
    !(
      process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_SPREADSHEET_ID_STORY
    )
  ) {
    throw new Error(
      "GOOGLE credentials must be set as env vars `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL` ,`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` and `GOOGLE_SPREADSHEET_ID_STORY`."
    );
  }
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_STORY);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
      /\\n/gm,
      "\n"
    ),
  });
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // read rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }

  const products = rows?.map(({ id, name, thumb, content, type }) => ({
    id: id ? id : null,
    name: name ? name : null,
    thumb: thumb ? thumb : null,
    content: content ? content : null,
    type: type ? type : null,
  }));
  return products;
}