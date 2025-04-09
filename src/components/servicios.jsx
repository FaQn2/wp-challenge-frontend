import { useEffect, useState } from "react";
import { getServicios } from "../services/wpApi";

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    getServicios().then(setServicios);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6" id="servicios">
        {servicios.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow p-4">
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title.rendered}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3
              className="text-xl font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
