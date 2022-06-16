import axios from "axios";
import { BASE_URL } from "client/api";
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token") || null;

  const { type, url, payload } = req.body;

  return axios({
    method: type,
    url: `${BASE_URL}${url}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(err.response.status).json(err.response.data);
    });
};

export default handler;
