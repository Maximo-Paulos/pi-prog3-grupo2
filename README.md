# pi-prog3-grupo2
API The Movies Data Base (TMDB)
La información a mostrar en la aplicación se obtendrá de la API The Movie DB. De la cual podrán encontrar la documentación en el siguiente link:
https://developer.themoviedb.org/reference/intro/getting-started
TMDB API
Para trabajar con la API deberán crear una cuenta en  https://www.themoviedb.org/login y buscar la API Key en https://www.themoviedb.org/settings/api 
La API Key debe colocarse como parte de la url del endpoint consultado. En cada endpoint tiene la opción “send request” con el modelo de url. Ante cualquier duda, consulten con sus profesores.
La documentación de los endpoints la encontrarán en la columna de la izquierda en el siguiente link: https://developers.themoviedb.org/3/movies/get-popular-movies.
En este link encontrarán información sobre cómo construir la url para que se vean las imágenes. Por ejemplo, el link a la medida “w342” podría funcionar bien en el tamaño de tarjetas a 4 columnas: https://image.tmdb.org/t/p/w342/${nombreDelArchivoDeLaImagen}.jpg

MILAN:

Punto 2 - Header y Footer
La aplicación tendrá un header y un footer común a todas las páginas.
Header debe tener un logo o nombre que identifique la aplicación y una barra de navegación con links a Home, Login, Crear Cuenta, Favoritos y a cada una de las secciones "Ver todas" del punto 3.
Tengan en cuenta que Login, Crear Cuenta y Favoritos deben de aparecer de forma condicional. Si no existe la cookie de sesión, Favoritos debe estar oculto. En caso que sí exista, Login y Crear Cuenta deben de estar ocultos. 
Footer debe tener el nombre de los integrantes del equipo.
Punto 3 - Home
La home page de la aplicación debe mostrar:
Un formulario de búsqueda que debe de estar en el cuerpo de la pantalla, no en el header.
Al menos 2 grupos de contenido con al menos 4 elementos provenientes cada uno de endpoints diferentes. Por ejemplo podrían mostrar "Películas más populares" y "Películas en cartel". 
Cada grupo debe tener un link o botón a 'Ver todas' que llevará a una nueva página en donde se muestra mayor cantidad de contenidos de esa temática.

Cada elemento del grupo anterior debe tener:
Foto.
Nombre o título.
Una descripción. La descripción iniciará oculta.
Link o botón "ver descripción" que debe mostrar/ ocultar la descripción.
Link o botón “ir a detalle” para navegar hasta la página de detalle del elemento.
Link, botón o ícono "agregar / quitar de favoritos", solamente disponible si la cookie de sesión existe.
Punto 4 - Página Crear Cuenta
La página de Crear Cuenta debe contar con un formulario que tenga los siguientes elementos:
campo para email
campo para password
botón de submit
Recordá que usaremos el localStorage para guardar los usuarios registrados, no olviden que su código debe de ser capaz de validar:
Que el email no esté en uso.
Que la contraseña tenga un mínimo de 6 caracteres.
Si la cuenta de usuario se crea correctamente, deberás redirigir a la página Login. En caso de no cumplir con alguno de estos requisitos, informar al usuario con un mensaje de error.

LEON: 


Punto 5 - Página Login
La página de Login debe contar con un formulario que tenga los siguientes elementos:
campo para email
campo para password
botón de submit
Recordá que usaremos el localStorage para validar los usuarios registrados, no olviden que su código debe de ser capaz de validar:
Si hay un usuario registrado con ese email.
Si la contraseña ingresada coincide con la contraseña guardada.
En caso que el usuario exista y la contraseña coincida, crear una cookie de sesión. En caso tal de no cumplir con alguno de estos requisitos, informar al usuario con un mensaje: “Credenciales incorrectas”, sin especificar el error.

Punto 6 - Páginas "Películas" y/o "Series”
Para cada grupo de contenido de la Home se debe generar una página que debe mostrar todos los contenidos de la sección clickeada y tener las siguientes funcionalidades:
Cargar más: el endpoint entrega una cantidad fija de resultados. Esta funcionalidad debe mostrar más contenidos al usuario con cada interacción.
Un formulario de un campo que permita filtrar contenido cargado.
Punto 7 - Página de detalle 
La página de detalle debe obtener de la API la información del contenido clickeado. Dependiendo del tipo de contenido clickeado (películas o series) el detalle deberá mostrar:

Detalle de una película:
Foto de la portada.
Nombre o título.
Calificación (rating).
Fecha de estreno.
Duración.
Sinópsis.
Género al que pertenece la película.
La posibilidad de agregar a “favoritos”, solo sí la cookie de sesión existe


.
Detalle de una serie:
Foto de la portada.
Nombre o título.
Calificación (rating).
Fecha de estreno.
Sinópsis.
Género al que pertenece la serie.
La posibilidad de agregar la serie a “favoritos”, solo sí la cookie de sesión existe

Ante cualquier duda sobre los datos consultar con la cátedra.

MAXI:


Punto 8 - Página de Favoritos
Crear una página para mostrar el listado de películas y series seleccionadas como favoritas. La página debe mostrar las 2 secciones por separado: películas favoritas y series favoritas. Los elementos mostrados deben permitir navegar hasta el detalle.  Cada elemento debe permitir eliminarse de la lista de favoritos. No olviden que solo se podrá navegar hacia esta página si existe la cookie de sesión.
Punto 9 - Resultados de búsqueda
Crear una página con los resultados de búsqueda obtenidos del correspondiente endpoint de búsqueda. Deberás modificar la maqueta en la sección del buscador para distinguir si estás buscando películas o series. Si la tarjeta tiene un botón para agregar a favoritos, este solo puede estar visible si existe la cookie de sesión.
Punto 10 - Página Not Found
La aplicación debe mostrar una página del tipo 404 Contenido Inexistente si el usuario ingresa una url inexistente.
Punto 11 - Loader
Previo a la carga de contenidos en cualquiera de las páginas debe verse un gif animado, spiner de carga o una leyenda “Cargando…” en caso de que el endpoint demore en responder.

prueba 2 git

prueba

apikey = 76928f90251fae431e5a99af6dc4662c
accessToken= eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjkyOGY5MDI1MWZhZTQzMWU1YTk5YWY2ZGM0NjYyYyIsIm5iZiI6MTc4OTA0MDIyNi44MzM5OTk5LCJzdWIiOiI2YWEyOTY2MjRlZDcxNmFlMTM5MmZlNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bzylJnlR42JHFP_ZDeIKNE-GtOq6z4gD7Plyp7nRSdY

ESTA TODO EN COMPONENTES Y NO ESTAN LAS SCREENS, REVISAR COMO DEBEN ESTAR ORDENADAS LAS CARPETAS ANTES DE ENTREGAR. 

PLAYGOURND



LISTADO ESTA TODO GPT
REVISAR CODIGO 
PUNTO 11
