const BASE_URL = "http://localhost/wp-challenge/wp-json/wp/v2";
const CATEGORIA_ID = 3; 

export const getServicios = async () => {
  const res = await fetch(`${BASE_URL}/posts?categories=${CATEGORIA_ID}`);
  const posts = await res.json();

  const postsConImagenes = await Promise.all(
    posts.map(async (post) => {
      let featured_image = null;

      if (post.featured_media) {
        try {
          const imgRes = await fetch(`${BASE_URL}/media/${post.featured_media}`);
          const imgData = await imgRes.json();
          featured_image = imgData.source_url;
        } catch (err) {
          console.warn("No se pudo cargar imagen destacada", err);
        }
      }

      return { ...post, featured_image };
    })
  );

  return postsConImagenes;
};


export const getBannerPage = async () => {
    const res = await fetch(`${BASE_URL}/pages?slug=inicio`);
    const pages = await res.json();
    const page = pages[0];
  
    let featured_image = null;
  
    if (page.featured_media) {
      try {
        const imgRes = await fetch(`${BASE_URL}/media/${page.featured_media}`);
        const imgData = await imgRes.json();
        featured_image = imgData.source_url;
      } catch (err) {
        console.warn("No se pudo cargar imagen del banner", err);
      }
    }
  
    return {
      title: page.title.rendered,
      content: page.content.rendered,
      image: featured_image,
    };
  };
  
