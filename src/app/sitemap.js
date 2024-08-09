import config from "@/config";
import axios from "axios";

export default async function sitemap() {
  // make a fetch request to your API for drasat-aljdwies data with axios
  const response = await axios
    .get(`${config.API_HOST}drasat-aljdwies`)
    .then((res) => res.data);

  // map through the data and generate sitemap entries
  const sitemapData = response.data.map((item) => ({
    url:
      `${config.APP_URL}/studie/${item.id}/${decodeURIComponent(
        item.attributes.title
      )}` || `${config.APP_URL}/${item.id}`,
    lastModified: new Date(item.attributes.updatedAt),
    changefreq: "daily",
    priority: 1,
  }));

  // return the sitemap data as an array of objects
  return [
    {
      url: `${config.APP_URL}`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 1,
    },
    {
      url: `${config.APP_URL}/about`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${config.APP_URL}/contact`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.8,
    },
    {
      url: `${config.APP_URL}/blog`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: `${config.APP_URL}/studies`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    ...sitemapData,
  ];
}
