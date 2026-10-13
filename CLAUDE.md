# CV virtual de Jesus Nicho

Página personal de Jesus Alberto Nicho Rosado sobre economía, ciencia de datos e inteligencia artificial. La fuente del currículo y de los cuatro proyectos originales es `assets/CV_JesusNichoRosado_12102026.pdf`; conserva ese archivo original sin modificaciones. Cinco proyectos adicionales del portafolio se documentan con evidencia pública de GitHub verificada el 12 de octubre de 2026.

## Preferencia de diseño del usuario

Jesus pidió **mejorar el estilo que ya tenía**, no rediseñarlo. Rechazó una propuesta editorial por aburrida y pidió recuperar su identidad original. Mantén el hero y navbar oscuros `#0d1117`, acento azul neón `#00A8E8`, logo `<JN/>`, Inter/Fira Code, partículas, texto de roles animado, terminal Python, tarjetas redondeadas, timeline oscuro, bloques de código y hover/glow. Haz mejoras acotadas de contenido, claridad, accesibilidad y móvil; no sustituyas esta estética por otra salvo pedido explícito.

## Pulido adicional aprobado

Tras aprobar la recuperación del diseño original, Jesus pidió mejorarlo aún más sin cambiar esa identidad. El refinamiento mantiene composición y animaciones: luz azul/retícula sutil, terminal más nítida, iconos SVG coherentes en los mismos espacios, tarjetas con enlaces más claros y énfasis del puesto abierto. Una línea discreta en la navbar indica avance de lectura. Los chips de impacto pertenecen a RS Inversiones (−15 % riesgo de incumplimientos, +10 % eficiencia de asignación) y Ronco Huacho (+30 % ventas, +35 % ingresos anuales), sin sumarlos entre empresas ni convertir riesgo en incumplimientos observados. No introduzcas nuevos componentes que sustituyan la presentación aceptada.

## Mejoras útiles de lectura y contacto

La experiencia conserva `details/summary` nativos y añade un control para abrir o contraer todos los puestos. El botón se oculta sin JavaScript y refleja también los cambios individuales; no impone cierre exclusivo. La barra de lectura se recalcula al cambiar detalles, tamaño e impresión, restaurando el estado elegido después de imprimir. Los enlaces de los cuatro proyectos del PDF conservan sus destinos e indican WEB o PDF. Las cuatro tarjetas añadidas de herramientas públicas usan GITHUB y enlazan al código. La quinta adición es un cuaderno geoespacial publicado, con enlaces WEB al análisis y GITHUB al código.

El footer oscuro mantiene el logo y presenta correo, teléfono, redes, acción de escribir y descarga del CV. La navegación de contacto llega a ese footer. Copiar correo es opcional y se oculta sin JavaScript: usa Clipboard API, confirma éxito solo tras resolver la escritura y anuncia errores con `aria-live`, manteniendo el correo visible y el enlace `mailto:`. No uses `execCommand`, selección automática, formularios ni servicios externos. El pie indica únicamente la fecha del CV, sin detalles de implementación.

Por pedido de Jesus, el footer incluye también un botón con el logo original blanco de WhatsApp que enlaza a `https://wa.me/51972571826`, usando el número del CV en formato internacional sin signos. El enlace nativo funciona sin JavaScript y abre otra pestaña con `noopener noreferrer`; tiene nombre accesible y tamaño táctil mínimo de 48 px. Solo abre el chat al pulsarlo; no envía mensajes automáticamente ni carga widgets de terceros. `assets/logos/whatsapp.svg` es una copia exacta del logo publicado en https://www.whatsapp.com/, descargado de https://static.whatsapp.net/rsrc.php/yM/r/ys-5GPT4pwS.svg, sin recolorear ni recortar.

## Archivos y ejecución

- `index.html`: seis experiencias, nueve proyectos, formación, habilidades, tres reconocimientos, voluntariado y contacto.
- `style.css`: diseño original con mejoras acotadas, estados de foco, responsive, movimiento reducido e impresión.
- `script.js`: menú móvil, animaciones progresivas, navegación activa y estado de impresión.
- `assets/`: PDF original descargable y favicon SVG.

HTML, CSS y JavaScript nativos; sin frameworks ni compilación. Las fuentes de Google Fonts son opcionales y tienen fallback local. Abre `index.html` o sirve la carpeta con `python -m http.server 8000`. Comprueba sintaxis con `node --check script.js`. Nunca ejecutes un build ni instales dependencias por esta tarea.

## Contenido vigente

- Licenciado en Economía por la PUCP con mención sobresaliente. Estudios marzo 2019–diciembre 2024; título profesional septiembre de 2026.
- Investigación en PUCP, octubre de 2024–presente, primero y expandido inicialmente. Incluye revisión de artículos con LLMs/multiagentes, NLP, automatización y plataforma laboral.
- Docencia en Universidad del Pacífico, abril–mayo de 2026, modalidad virtual.
- Inglés B2 intermedio, Idiomas Católica, agosto de 2020–presente.
- Teléfono `+51 972 571 826`, correo `a20176035@pucp.edu.pe`; San Miguel, Lima, Perú.
- No inventes disponibilidad, años de experiencia, métricas de modelos ni niveles. Los logros 15 %, 10 %, 30 % y 35 % proceden del PDF. Los contadores representan seis experiencias, nueve proyectos y tres reconocimientos. Las barras expresan categorías cualitativas, no porcentajes de competencia.
- La terminal presenta datos verdaderos del perfil; los bloques de código son ejemplos ilustrativos, sin AIC ni precisión ficticia. Los roles animados se limitan a Economista, Ciencia de Datos, Machine Learning e IA e Investigación Económica.

## Enlaces

- LinkedIn: https://www.linkedin.com/in/jesus27nicho
- GitHub: https://github.com/jnichor
- Proyecto laboral (2026): https://linkedin-job-dashboard.vercel.app/
- ChatGPT (2024; periodo 2020–2023): https://github.com/jnichor/Tesis_ImpactoGPT/blob/main/Tesis_GPT.pdf
- Deserción escolar (2023; datos de 2021): https://github.com/jnichor/Deserci-n_escolar_TF/blob/main/R_PYTHON_TF_GRUPO8/results/R_PYTHON_TF.pdf
- Seguros de salud (2023; datos de 2017): https://github.com/jnichor/Censo_Seguro_trabajo/blob/main/TrabajoFinal-Grupo3_ManejodeBasesdeDatos.pdf
- Curso de docencia: https://github.com/alexanderquispe/deep-learning-up

## Proyectos adicionales verificados en GitHub

La ampliación está autorizada por Jesus y conserva las cuatro tarjetas originales y el voluntariado. Las siguientes funciones se verificaron en README y código, sin ejecutar los repositorios. No atribuyas autoría exclusiva, fechas de finalización, impactos, publicaciones conseguidas ni precisión de pronósticos. Muestra «Repositorio público» en lugar de año. Los enlaces principales de las cuatro herramientas van al repositorio con badge GITHUB; el cuaderno geoespacial tiene análisis WEB y código GITHUB; no hay peticiones a GitHub durante la navegación.

- **Investigación con microdatos ENAHO**: https://github.com/jnichor/Temas_enaho
  Herramienta de terminal que organiza microdatos del INEI y propone temas de investigación con apoyo de Claude. Calcula brechas con Polars y exporta fichas de investigación y datasets con controles de calidad. Tecnologías: Python, Polars, Claude Code.
- **Pipeline de investigación académica**: https://github.com/jnichor/Top_papers_creator
  Pipeline en Python que coordina descubrimiento de datos, evaluación de ideas, análisis y redacción de borradores en LaTeX con Claude Code. Incluye revisiones y puntos de decisión humana, con progreso guardado entre etapas. Tecnologías: Python, Claude Code, LaTeX.
- **Gestión de ventas y demanda**: https://github.com/jnichor/predictor-de-ventas
  Aplicación web para registrar ventas, controlar inventario y consultar reportes. Calcula proyecciones de demanda y sugerencias de reposición a partir del historial de ventas. Tecnologías: Next.js, TypeScript, Supabase.
- **Automatización de videos web**: https://github.com/jnichor/creador_videos_ai
  Pipeline para crear videos promocionales de sitios web con recorridos de página, voz y subtítulos sincronizados. Combina plantillas HTML, captura con Playwright y composición con FFmpeg para distintos formatos. Tecnologías: Python, Playwright, FFmpeg.

**Densidad poblacional y superficie construida**: https://jnichor.github.io/website_GPT/maps.html, código https://github.com/jnichor/website_GPT. Cuaderno de Python sobre Sri Lanka, Bangladesh e India, con datos de WorldPop y Google Open Buildings. GeoPandas y Folium aparecen en el código publicado. No atribuyas un año de culminación ni lo presentes como aplicación terminada: la página publicada incluye trazas de errores (rasterio ausente). Describe el análisis de forma neutral.

El pipeline académico se identifica en su repositorio como Papers-HQ. La aplicación de ventas exige autenticación para sus operaciones; no presentes su homepage como demo abierta. El PDF y las competencias declaradas del currículo no cambian por esta ampliación.

## Logos institucionales del timeline

Los logos locales de `assets/logos/` son copias exactas de archivos oficiales verificados el 12 de octubre de 2026, salvo Ronco Huacho, cuya imagen fue proporcionada y asignada explícitamente por Jesus ese día. `assets/logos/sources.json` conserva procedencia y selección. Se muestran completos con `object-fit: contain` y proporciones originales. PUCP usa respaldo oscuro `#0d1117` para mantener visible el wordmark blanco original; Universidad del Pacífico y Management Solutions usan respaldo blanco neutro; no los recortes, recolorees, filtres ni recrees. Son decorativos (`alt=""`, wrapper `aria-hidden`) porque el nombre del empleador aparece al lado. En móvil estrecho el emblema queda sobre el nombre para evitar texto comprimido.

- PUCP, reutilizado en Investigación e Inversiones: `pucp.svg`, https://s3.amazonaws.com/files.pucp.edu.pe/pucp-general/img-header/logo-pucp-new.svg (referenciado por https://www.pucp.edu.pe/; referencia de marca https://dci.pucp.edu.pe/recursos/uso-logotipo-pucp).
- Universidad del Pacífico, Lima: `universidad-pacifico.png`, https://sisisemail.up.edu.pe/sisisemail/_data/2021/2052/UniversidadDelPacifico/UniversidadDelPacifico.png (descarga institucional en https://campusvirtual.up.edu.pe/administrativos/webmarketing.aspx).
- Management Solutions: `management-solutions-footer.svg`, https://www.managementsolutions.com/themes/custom/ms/footer_logo.svg (variante oficial azul/dorada del footer de https://www.managementsolutions.com/en; no usar el header blanco sobre el respaldo claro).

Ronco Huacho usa `ronco-huacho.png`, imagen cuadrada original enviada por Jesus. Por pedido del usuario, su recuadro hereda las mismas dimensiones de los otros logos: 132 × 60 px, padding 6 × 8 px y respaldo oscuro como PUCP. La imagen completa queda centrada con su proporción original, sin recortar, filtrar ni recolorear. RS Inversiones S.A.C. conserva sus iniciales; está pendiente de logo o enlace oficial confirmado por el usuario. No inventes logos y no añadas esta nota al contenido público del CV.

## Convenciones

HTML semántico, BEM, comentarios en español y código legible. Sin JavaScript, contenido y `details/summary` siguen disponibles. Mantén foco visible, controles de 44 px, buen contraste y texto móvil legible. Verifica 375/768/1024/1440 px sin overflow. El menú actualiza `aria-expanded`, cierra con Escape y restablece su estado al cruzar el breakpoint. Partículas y typing se pausan fuera de pantalla o con pestaña oculta; movimiento reducido muestra valores finales sin timers ni partículas. Nueve proyectos en tarjetas originales, dos columnas en desktop y una columna móvil, con enlaces siempre visibles. No agregues decoraciones o secciones nuevas como sustituto del diseño existente.


Jesus encontró demasiado discretos los fondos de cff0acb y pidió que llamen la atención. La experiencia tiene circuitos luminosos y puntos viajeros en los márgenes y junto al encabezado, visibles también en móvil (ciclos de 6–8 s); contacto usa órbitas con nodos y halos más presentes (8–10 s). Conserva este movimiento perceptible y no vuelvas a los ciclos de 18–24 s casi invisibles. Son capas SVG/CSS decorativas, sin capturar clics ni generar desbordamiento; los nodos se sitúan fuera de las zonas de lectura. `.background-motion-active` habilita el movimiento solo cuando la sección está visible y la pestaña activa; sin JavaScript o con movimiento reducido permanecen estáticos. Se pausan al imprimir y los fondos decorativos se ocultan en la impresión. El hero conserva sus animaciones actuales.

## Escritura del nombre

Por indicación del usuario, escribir **Jesus** sin tilde en el sitio, título y metadatos. Conservar el PDF original sin cambios.

## Logos originales del stack

Por pedido de Jesus, las nueve tarjetas de herramientas usan archivos originales locales en `assets/tools/`: Python, R, Stata, Git, Excel, Power BI, LaTeX, TensorFlow y MATLAB. Se descargaron de sus sitios oficiales, CDN o repositorios oficiales; `sources.json` registra procedencia y hash. Power BI procede del paquete de iconos oficial de Microsoft Fabric; MATLAB del repositorio oficial mathworks/matlab-proxy. Mantener estos archivos sin modificaciones, con `object-fit: contain`, respaldo transparente y espacio reservado de 80 × 60 px, salvo el logo clásico de LaTeX: copia exacta del SVG del footer oficial con letras claras, sobre respaldo oscuro para conservar su contraste; no recrear símbolos con letras, ni recortar, recolorear o aplicar filtros. El icono de TensorFlow es el PNG de 180 px del sitio oficial. No añadir dependencias ni solicitudes remotas al navegar. Los nombres y niveles originales permanecen. `credits.html` conserva créditos, licencias y marcas y se enlaza discretamente debajo del stack.

El acceso de WhatsApp también aparece en la fila de contactos del hero, junto a teléfono, correo, GitHub y LinkedIn. Usa el mismo enlace `https://wa.me/51972571826`. `assets/logos/whatsapp-icon.svg` conserva el grupo completo del símbolo telefónico del logo oficial descargado, con su geometría y blanco originales; solo separa el símbolo del wordmark y ajusta el viewport a 346 × 346 para su uso como icono. No aplicar filtros ni cambiar colores. El botón hereda tamaño mínimo de 44 px, foco y hover de los contactos existentes; funciona sin JavaScript.
