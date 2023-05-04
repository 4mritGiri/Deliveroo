
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: '6u4f9z6d',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2021-10-21",
  token: process.env.API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
        return  builder.image(source);
}

export default sanityClient;

