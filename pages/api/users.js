import { getAllUsersData } from "../../lib/users"

export default async (req, res) => {

  const userData = await getAllUsersData()

  res.json(
    userData
  );

}
