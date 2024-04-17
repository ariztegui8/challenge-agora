# Documentación del Proyecto Agora

## Descripción del Proyecto

Este proyecto es un clon del sitio web Agora2023, implementado con tres páginas principales:

- **Página Principal**: Replica el diseño original del sitio Agora, siguiendo la línea de colores, tipografías, iconos e interacciones establecidas.
- **Blog**: Consume una API desarrollada en Node.js y alojada en MongoDB. Permite crear, leer, actualizar y eliminar artículos. Incluye funcionalidades como búsqueda, paginación y ordenamiento ascendente/descendente de artículos.
- **Página de Detalle**: Muestra información detallada de cada artículo seleccionado desde el Blog, permitiendo a los usuarios leer contenido completo de cada entrada.

Además, la página principal integra un newsletter que captura datos de los usuarios y los almacena en MongoDB.


## Infraestructura y URLs de Acceso

El proyecto está desplegado en dos plataformas diferentes para separar el front-end del back-end.


### Backend

- **Alojado en**: Railway
- **URL Base**: https://backagora.up.railway.app/
- **Endpoint de Artículos**: https://backagora.up.railway.app/api/articles
- **Endpoint de Suscriptores**: https://backagora.up.railway.app/api/subscribers

### Frontend

- **Alojado en**: Vercel
- **URL del Proyecto**: https://challenge-agora.vercel.app/

Esta estructura facilita la escalabilidad y mantenimiento del proyecto.


## Tecnologías Utilizadas

- **Next.js**: Elegido por su sistema de enrutamiento avanzado que facilita la implementación de rutas dinámicas y optimizadas.
- **Axios**: Realizar solicitudes a la API.
- **React-Countup** y **React-Intersection-Observer**: Utilizados para animar números que cuentan hasta un cierto valor cuando el elemento es visible en el viewport.
- **React-Google-Recaptcha**: Implementado para agregar una seguridad en los formularios y verificar que el usuario no sea un bot.
- **React-Icons**: Usado para incluir íconos en la aplicación.
- **React-Slick** y **Slick-Carousel**: Bibliotecas para crear carruseles de imágenes de forma dinámica y responsiva.
- **React-Spinners**: Animaciones de carga para mejorar la experiencia del usuario durante la espera de la carga de datos.
- **Tailwind CSS**: Framework de CSS para estilizar la aplicación de manera rápida y eficiente.


## Buenas Prácticas Implementadas

- **Componentización**: División de la interfaz en componentes reutilizables para mejorar la mantenibilidad y escalabilidad del código.
- **Responsividad**: Diseño adaptable para garantizar una buena experiencia de usuario en dispositivos móviles y diferentes tamaños de pantalla.
- **Estructura de Archivos**: Organización lógica de archivos y carpetas para facilitar la navegación y comprensión del código fuente.
- **Uso de Hooks**: Aplicación de Hooks de React para gestionar el estado y el ciclo de vida de los componentes de manera efectiva.


## Sugerencias de Mejora

- **Mejoras en Carrouseles**: Optimizar los carrouseles para que sean más fluidos y responsivos.
- **Adaptabilidad Móvil**: Mejorar la experiencia en dispositivos móviles revisando elementos como efectos de hover que no son prácticos en estas interfaces.
- **Navbar Fijo**: Implementar un menú de navegación fijo para mejorar la accesibilidad y la navegación en la aplicación.
- **Botón de Regreso en Página de Detalle**: Agregar botones para volver atrás y regresar al blog, mejorando la navegación y experiencia de usuario.
**Uso de Bibliotecas UI como Material-UI o NextUI**: Implementar una biblioteca de componentes UI para estandarizar y reutilizar elementos visuales en toda la aplicación, lo que también podría ayudar a mejorar la coherencia y la velocidad de desarrollo.

