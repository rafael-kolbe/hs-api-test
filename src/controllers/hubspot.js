import hs from "../connections/hubspot.js";

export const getContacts = async (req, res) => {
  const hsResponse = await hs.crm.contacts.getAll();

  return res.json(hsResponse);
};
