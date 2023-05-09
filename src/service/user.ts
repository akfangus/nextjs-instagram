import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string | null;
  name: string | null;
  image?: string | null;
  username: string;
};
export async function addUser({ id, username, email, image, name }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}
