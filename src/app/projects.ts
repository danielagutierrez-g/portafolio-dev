export interface Project {
  number: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  repository: string;
  demo: string;
  sourceRepository?: string;
}

const github = 'https://github.com/danielagutierrez-g';

export const projects: Project[] = [
  {
    number: '01',
    name: 'Portafolio digital',
    type: 'Proyecto principal',
    description: 'Catálogo personal de proyectos desarrollado con Angular y publicado en GitHub Pages.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    repository: `${github}/portafolio-dev`,
    demo: 'https://danielagutierrez-g.github.io/portafolio-dev/',
  },
  {
    number: '02',
    name: 'Organización por módulos',
    type: 'Demo web',
    description: 'Recorrido interactivo por módulos de una aplicación y las responsabilidades de cada uno.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: `${github}/modulos-angular-demo`,
    demo: 'https://danielagutierrez-g.github.io/modulos-angular-demo/',
    sourceRepository: `${github}/parcial-1`,
  },
  {
    number: '03',
    name: 'Biblioteca de libros',
    type: 'Demo web',
    description: 'Registro sencillo para agregar libros, buscarlos y mantener una lista local.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: `${github}/biblioteca-demo`,
    demo: 'https://danielagutierrez-g.github.io/biblioteca-demo/',
    sourceRepository: `${github}/libreriaEstructura`,
  },
  {
    number: '04',
    name: 'Gestión de clientes',
    type: 'Demo web',
    description: 'Formulario y listado de clientes con búsqueda y almacenamiento en el navegador.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: `${github}/clientes-demo`,
    demo: 'https://danielagutierrez-g.github.io/clientes-demo/',
    sourceRepository: `${github}/cliente-service`,
  },
  {
    number: '05',
    name: 'Calculadora',
    type: 'Demo web',
    description: 'Interfaz para practicar operaciones básicas, inspirada en el ejercicio de calculadora JNI.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: `${github}/calculadora-jni-demo`,
    demo: 'https://danielagutierrez-g.github.io/calculadora-jni-demo/',
    sourceRepository: `${github}/libreriaEstructura/tree/main/springboot-jni`,
  },
];
