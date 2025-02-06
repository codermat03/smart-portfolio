const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = "UC-K2dAF6o-4grg_HpUVNJVQ";

export const fetchYouTubeStats = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);

    if (!data.items || data.items.length === 0)
      throw new Error("Failed to fetch YouTube data");

    const statistics = data.items[0].statistics;

    return {
      subscribers: statistics.subscriberCount,
      views: statistics.viewCount,
      videoCount: statistics.videoCount,
    };
  } catch (error) {
    console.error("YouTube API Error:", error);
    return null;
  }
};
