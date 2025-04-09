import { useEffect, useState } from "react";
import { getBannerPage } from "../services/wpApi";

function Banner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getBannerPage().then(setData);
  }, []);

  if (!data) return <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />;

  return (
    <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
      <img
        src={data.image}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: data.title }} />
        <div
          className="mb-4 text-lg"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
}

export default Banner;
