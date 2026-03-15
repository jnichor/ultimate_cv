# CLAUDE.md — Página Web Personal de Jesús Alberto Nicho Rosado

## Descripción del Proyecto
Página web personal interactiva de presentación profesional para **Jesús Alberto Nicho Rosado**, Bachiller de Economía por la PUCP. El objetivo es mostrar su perfil de manera moderna, limpia y atractiva para reclutadores y contactos del ámbito de finanzas, ciencia de datos e investigación económica.

---

## Tecnologías
- **HTML5** semántico
- **CSS3** con variables CSS y animaciones (sin frameworks externos)
- **JavaScript vanilla** para interactividad (scroll suave, animaciones al entrar en viewport, navegación activa)
- Sin dependencias externas salvo fuentes de Google Fonts (Inter o similar)

---

## Estructura de Archivos
```
/
├── index.html
├── style.css
└── script.js
```

---

## Diseño y Estilo
- Paleta de colores: azul profesional (`#1a73e8`) como acento, fondo claro (`#f9fafb`), texto oscuro (`#1f2937`)
- Tipografía: Inter o Poppins (Google Fonts)
- Layout: una sola página con scroll (SPA-style), navbar fija con navegación entre secciones
- Responsive: mobile-first, adaptable a tablets y desktop
- Animaciones: fade-in suave al hacer scroll en cada sección (Intersection Observer API)
- Estilo general: minimalista, profesional, sin excesos visuales

---

## Secciones de la Página

### 1. Hero / Encabezado
- Nombre: **Jesús Alberto Nicho Rosado**
- Título: Bachiller de Economía · Pontificia Universidad Católica del Perú
- Subtítulo breve: Ciencia de Datos | Finanzas | Investigación Económica
- Datos de contacto:
  - Teléfono: +51 917056909
  - Email: a20176035@pucp.edu.pe
  - GitHub: jnichor
  - LinkedIn: jesus27nicho
  - Fecha de nacimiento: 09/04/2000
- Botón CTA: "Ver mi CV" o "Contáctame"

### 2. Resumen
Soy bachiller de Economía por la Pontificia Universidad Católica del Perú (PUCP), con sólida formación cuantitativa y experiencia en programación con Python, R y Stata, aplicado al análisis económico-financiero, modelado estadístico (logit, GLM, series de tiempo, clustering), visualización de datos y simulaciones. Destaco por mi alta capacidad analítica, proactividad y adaptación. Busco contribuir en proyectos de ciencia de datos aplicados a finanzas, riesgo crediticio e investigación, mediante soluciones basadas en datos, modelos predictivos y herramientas de analítica avanzada.

### 3. Experiencia Laboral
Mostrar como línea de tiempo vertical con tarjetas expandibles.

| Empresa | Cargo | Período | Logros clave |
|---|---|---|---|
| Management Solutions | Consultor de Ciencia de Datos | Sep 2025 – Ene 2026 | Levantamiento As-Is de procesos financieros; clasificación de requerimientos con modelos Transformers |
| PUCP | Practicante de Inversiones | Ene 2025 – Ago 2025 | Modelamiento de BD; actualización de instructivos; capacitación a usuarios finales |
| PUCP | Asistente de Investigación | Oct 2024 – Presente | Análisis estadístico en Python y Stata; publicación de informes en GitHub con el Prof. Alexander Quispe |
| RS Inversiones S.A.C. | Practicante de Finanzas | Sep 2024 – Dic 2024 | Sistema de alertas automático (↓15% incumplimientos); dashboards en Power BI; presupuesto anual (↑10% eficiencia) |
| Ronco Huacho | Administrador de Costos y Presupuestos | Ene 2021 – Mar 2022 | Gestión de redes sociales (↑30% ventas); propuestas de inversión (↑35% ingresos anuales) |

### 4. Proyectos y Voluntariados
Mostrar como grilla de tarjetas con año, título y badge de distinción.

**Proyectos:**
- **2024** — Impacto de la Disponibilidad de ChatGPT en el Desarrollo de Software orientado a Ciencia de Datos entre 2020 y 2023 · *Proyecto Destacado*
- **2023** — Análisis Financiero de la empresa Backus durante 2012 y 2022 · *Proyecto Relevante*
- **2023** — Determinantes de la deserción escolar en la Educación Básica Regular en el Perú durante el 2021 · *Proyecto Destacado*
- **2023** — Análisis situacional de la cobertura de seguros de salud en Perú (2017) · *Proyecto Sobresaliente*

**Voluntariado:**
- **2024** — Voluntario de la comisión de Asuntos Académicos, Asamblea de Estudiantes de Economía PUCP

### 5. Habilidades
Mostrar con barras de progreso visuales o badges por categoría.

**Programación:**
- Python — Intermedio
- R — Intermedio
- Stata — Intermedio
- Git — Avanzado
- Excel — Avanzado
- Power BI — Intermedio
- LaTeX — Avanzado
- Matlab — Básico

**Marcos de trabajo:**
- OPENAI-API, TensorFlow, SQL Server

**Habilidades blandas:**
- Liderazgo, Pensamiento crítico, Empatía, Trabajo en equipo

**Idiomas:**
- Español — Nativo
- Inglés — C1 Avanzado

### 6. Reconocimientos
Mostrar como lista con íconos de trofeo/medalla.

- **2025** — Ponente del X Congreso Anual APE 2025, Asociación Peruana de Economía
- **2024** — Beca completa del programa de Microeconomía Aplicada y Ciencias Sociales (CC.SS.), QLAB PUCP
- **2020** — Beca Continuidad de Estudios, Pronabec

---

## Navegación
Navbar fija con los siguientes enlaces de ancla:
`Resumen` | `Experiencia` | `Proyectos` | `Habilidades` | `Reconocimientos`

---

## Comportamiento Interactivo
- Scroll suave entre secciones al hacer clic en el navbar
- Clase `.active` en el enlace del navbar correspondiente a la sección visible (scroll spy)
- Animaciones de entrada (fade + slide-up) al aparecer cada sección en el viewport usando `IntersectionObserver`
- Tarjetas de experiencia expandibles (click para ver detalle)
- Botón "volver arriba" flotante

---

## Convenciones de Código
- Usar clases BEM en CSS (`.section__title`, `.card__body`, etc.)
- JavaScript sin jQuery ni librerías externas
- Comentarios en español
- Semántica HTML correcta (`<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`)
