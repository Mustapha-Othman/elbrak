import config from "@/config";
import axios from "axios";

export default async function LoadingStudies() {
  const response = await axios
    .get(`${config.API_HOST}drasat-aljdwies`)
    .then((res) => res.data);

  // map through the data and generate sitemap entries
  const sitemapData = response.data.map((item) => ({
    url:
      `${config.APP_URL}/${item.id}/${encodeURIComponent(
        item.attributes.title
      )}` || `${config.APP_URL}/${item.id}`,
    lastModified: new Date(item.attributes.updatedAt),
    changefreq: "daily",
    priority: 1,
  }));

  console.log(sitemapData);

  return <>site</>;
}
