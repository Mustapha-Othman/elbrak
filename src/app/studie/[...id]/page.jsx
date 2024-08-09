import axios from "axios";
import StudieContent from "./content";
import config from "@/config";

export async function generateMetadata({ params }) {
  try {
    const drast = await axios
      .get(`${config.API_HOST}drasat-aljdwies/${params.id[0]}?populate=*`)
      .then((res) => res.data);
    if (drast?.data) {
      return {
        title: drast.data.attributes.title.replace(/^\s+|\s+$/g, ""),
        description: drast.data.attributes.seo?.metaDescription
          ? drast.data.attributes.seo.metaDescription
          : drast.data.attributes.content.substring(0, 150),
        robots: "index",
      };
    }
  } catch (error) {
    console.log(error.message);
  }

  return {
    title: "Page Not Found",
    description: "Page not found",
    robots: "noindex",
  };
}

const Studie = async ({ params }) => {
  return <StudieContent params={params} />;
};

export default Studie;
