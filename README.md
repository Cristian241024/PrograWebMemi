# 🏛️ Centro MEMI - FCyT UMSS

**Sitio Web Institucional del Centro de Mejoramiento de la Enseñanza de la Matemática e Informática**

Universidad Mayor de San Simón - Facultad de Ciencias y Tecnología
Estudiante: Huascar Cristian Cuellar Flores
---

## 📖 Descripción del Proyecto

Sitio web responsivo desarrollado para el Centro MEMI (Centro de Mejoramiento de la Enseñanza de la Matemática e Informática) de la Universidad Mayor de San Simón. El proyecto implementa un diseño moderno, totalmente responsivo y optimizado para dispositivos móviles usando el enfoque Mobile-First.



## 🚀 Proceso de Desarrollo - 5 Prompts Principales con ayuda de Agente Copilot

### **PROMPT 1: Estructura Base y Header**
```
Crea una página web institucional para el Centro MEMI (Centro de Mejoramiento de la Enseñanza de la Matemática e Informática) de la Universidad Mayor de San Simón usando HTML5, CSS3 y JavaScript vanilla. Implementa un header con tres logos (MEMI a la izquierda, SANSI centrado con título "CENTRO MEMI", FCyT a la derecha) usando diseño mobile-first. Usa W3.CSS como framework base, Font Awesome para iconos, y define variables CSS con colores institucionales: rojo #C41E3A, azul #003366, blanco #FFFFFF, gris #666666. El header debe ser completamente responsivo y mantener la posición de logos en todas las resoluciones.
```

### **PROMPT 2: Secciones de Contenido Principal**
```
Crea las secciones principales del sitio: Misión/Visión/Valores (grid de 3 columnas), Antecedentes (texto largo), Datos Históricos (cronología con 4 fases), Organigrama (imagen con placeholder de respaldo), Autoridades (3 cards con fotos y placeholders: Director, Coordinador Matemática, Coordinador Informática). Cada sección debe tener diseño mobile-first, usar las variables CSS institucionales, efectos hover, y sistema de placeholders para imágenes faltantes. Implementa smooth scrolling entre secciones y navegación activa que resalte la sección visible.
```

### **PROMPT 3: Servicios, ICPC y Publicaciones**
```
Implementa la sección Servicios con 5 cards en flexbox: Cursos de formación (rojo), Actualización profesional (azul), Asesoramiento (verde #00A693), Conferencias (dorado #B8860B), Alquiler ambientes (gris azulado #2F4F4F). Cada card debe tener header colorido con flecha CSS, contenido descriptivo y features destacadas. Crea sección ICPC UMSS y 3 espacios para imágenes con placeholders. Agrega sección Publicaciones mostrando las 3 imágenes de anuncios en columna única con object-fit: contain.
```

### **PROMPT 4: Contacto, Video y Finalización**
```
Implementa la sección Contacto con CSS Grid: card de información (dirección, teléfono +59144666037, IP 36540, email memi@fcyt.umss.edu.bo), horarios de atención, y Google Maps embed del Centro MEMI usando iframe con src específico. Agrega video de YouTube (ID: Zxy8tJvgArY) con autoplay cuando esté visible usando Intersection Observer. Crea footer con 3 columnas (Contacto, Redes Sociales Facebook, Enlaces FCyT).
```
### **PROMPT 5: Implementación Readme**
```
Implementa un Readme que tenga los prompts que te di y tambien las funcionalidades desarrolladas por mi.
```
---

## 🔧 Funcionalidades Desarrolladas por Cristian Cuellar

### **📱 Optimizaciones Mobile-First**
- **Responsive breakpoints personalizados:** Ajuste fino de 4 breakpoints (480px, 601px, 993px, 1200px+)
- **Header adaptativo:** Logos con escalado proporcional desde 40px hasta 90px según dispositivo
- **Touch-friendly interactions:** Botones y enlaces optimizados para pantallas táctiles

### **🎨 Mejoras de UX/UI Implementadas**
- **Sistema de placeholders inteligente:** Detección automática de imágenes faltantes con fallbacks elegantes
- **Hover effects personalizados:** Transform scales y translateY para interacciones fluidas
- **Color coding institucional:** Diferenciación visual por áreas (Director-rojo, Matemática-verde, Informática-dorado)
- **Smooth animations:** Transiciones CSS de 0.3s en todos los elementos interactivos

### **⚙️ JavaScript Personalizado Desarrollado**
- **Carousel engine:** Sistema de slides con auto-pause en visibility change
- **Navigation state management:** Destacado dinámico de sección activa durante scroll
- **Dropdown mobile logic:** Cierre automático al hacer clic fuera del menú
- **Image error handling:** Reemplazo dinámico con placeholders cuando las imágenes fallan
- **Intersection Observer:** Video autoplay/pause inteligente según visibilidad

### **📐 Arquitectura CSS**
- **CSS Grid híbrido:** Combinación estratégica de Grid y Flexbox según sección
- **Variable system:** Uso consistente de CSS custom properties para mantenibilidad
- **Mobile-first media queries:** Progresión lógica de estilos desde 320px hasta 1920px+
- **Component-based styling:** Clases reutilizables para cards, botones y layouts


### **🎯 Personalizaciones Institucionales**
- **Contenido MEMI específico:** Integración de información histórica real (1991-2010)
- **Datos de contacto reales:** Teléfonos, emails y direcciones verificadas
- **Google Maps personalizado:** Ubicación exacta del Centro MEMI en campus UMSS
- **Branding consistency:** Aplicación rigurosa de colores y tipografías institucionales

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | - | Estructura semántica |
| **CSS3** | - | Estilos y responsive design |
| **JavaScript** | ES6+ | Interactividad y funcionalidad |
| **W3.CSS** | 4.0 | Framework CSS base |
| **Font Awesome** | 6.0.0 | Iconografía |
| **Google Maps** | Embed API | Mapa de ubicación |
| **YouTube** | Embed API | Video institucional |

---

## 📂 Estructura del Proyecto

```
PrograWebMemi/
├── 📄 index.html              # Página principal
├── 🎨 styles.css              # Estilos CSS principales
├── ⚙️ script.js               # JavaScript funcionalidad
├── 📖 README.md               # Documentación del proyecto
└── 📁 assets/
    └── 📁 images/
        ├── 📁 carousel/         # Imágenes del carrusel
        │   ├── Bienvenida.png
        │   ├── anuncio-1.png
        │   ├── anuncio-2.png
        │   └── anuncio-3.jpg
        ├── 📁 autoridades/      # Fotos autoridades
        │   ├── director.png
        │   ├── coordinador-matematica.png
        │   └── coordinador-informatica.png
        ├── 📁 icpc/            # Imágenes ICPC
        │   ├── icpc-1.jpg
        │   ├── icpc-2.jpg
        │   └── icpc-3.jpg
        ├── LogoMemi.png        # Logo Centro MEMI
        ├── logo sansi.png      # Logo SANSI
        ├── LogoFcyt.png        # Logo FCyT
        └── organigramaMemi.png # Organigrama
```

---

## 💻 Lista Completa de Implementaciones

- **Estructura HTML5 semántica** con secciones claramente definidas
- **Estilos CSS3** aplicando diseño responsivo y mobile-first
- **JavaScript vanilla** para interactividad sin dependencias externas
- **Framework W3.CSS** integrado como base para el diseño
- **Iconos Font Awesome** utilizados en toda la navegación
- **Google Maps y YouTube** embebidos para contacto y video institucional
- **Sistema de placeholders** para imágenes faltantes implementado
- **Colores institucionales** aplicados mediante variables CSS
- **Navegación activa y smooth scrolling** entre secciones
- **Documentación completa** en README.md con detalles del proyecto

---


## 🎨 Colores Institucionales

```css
:root {
    --color-rojo: #C41E3A;    /* Rojo UMSS */
    --color-azul: #003366;    /* Azul UMSS */
    --color-blanco: #FFFFFF;  /* Blanco */
    --color-gris: #666666;    /* Gris texto */
}
```

**Colores adicionales:**
- Verde MEMI: `#00A693`
- Dorado: `#B8860B`
- Gris azulado: `#2F4F4F`

---




