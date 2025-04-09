# WP Challenge - React + Tailwind + WordPress

Este proyecto es parte de una prueba técnica. El objetivo es construir un frontend en React que consuma contenido desde un backend en WordPress, utilizando la REST API.

---

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- WordPress (como backend headless)

---

## 📦 Instalación y ejecución del proyecto

1. Cloná el repositorio:
```bash
git clone https://github.com/tu-usuario/wp-challenge-frontend.git
cd wp-challenge-frontend 
```
2. npm install  
3. npm run dev










# Endpoints de WordPress usados:

/wp-json/wp/v2/pages?slug=inicio: para obtener el contenido del banner.

/wp-json/wp/v2/posts?categories=3: para listar los servicios.

/wp-json/wp/v2/media/:id: para obtener las imágenes destacadas.



# ¿Cómo modificar el contenido desde WordPress?
Ingresá al panel de WordPress (/wp-admin).

#Para cambiar el banner:

Editá la página con el slug inicio.

Cambiá el título, imagen destacada o contenido.



# Para modificar los servicios:

Editá o agregá posts asignados a la categoría servicios.

Asegurate de asignar la imagen destacada para que se muestre correctamente.




# Notas
El diseño no es pixel-perfect, pero se utilizó Tailwind para asegurar responsividad y estructura clara.
Se priorizó una arquitectura simple pero modular, con componentes reutilizables y separación de lógica de API.



Autor: Facundo Tagliavini y su mate.

