import React from "react";

const videos = [
    { id: "1hL4u1-f1zo", title: "DIY Desk Organizer | Paper Crafts Idea" },
    { id: "ms8SznDnFdI", title: "How to make Stickers at home" },
    { id: "uUc3h_-y1rM", title: "Cute Easy Paper Crafts for Beginners" },
    { id: "lb3wSl1aDZg", title: "DIY Easy Crafts When You’re Bored" },
    { id: "bY-bxFIyUDY", title: "Easy Creative Paper Craft" },
    { id: "pbJJzE8DZcs", title: "DIY Creative Paper Craft" },
];

const ShowcaseVideos: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="text-center py-16">
                <p className="text-[#ff512f] text-sm sm:text-base lg:text-lg uppercase">
                    Latest Videos
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl py-4 font-bold">
                    Explore my latest craft videos and tutorials
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 max-w-6xl mx-auto">
                {videos.map((video) => (
                    <div key={video.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <iframe
                            className="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowcaseVideos;
