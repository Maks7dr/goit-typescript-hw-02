import axios from "axios";
import { UnsplashImage } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "4W6AI5a9su4aCfDQE5ACBxiBobYL9eC--QcZF52pibI";

export const fetchUnsplashWithTopic = async (
  topic: string,
  page: number = 1
): Promise<UnsplashImage[]> => {
  if (topic.trim() === "") return [];

  try {
    const response = await axios.get("/search/photos", {
      params: {
        client_id: key,
        query: topic,
        per_page: 12,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
    throw error;
  }
};
