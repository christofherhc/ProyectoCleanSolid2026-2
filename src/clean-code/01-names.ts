(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const Today = new Date();

  // días transcurridos - elapsed time in days
  const Day: number = 23;

  // número de archivos en un directorio - number of files in directory
  const NumberOfFiles = 33;

  // primer nombre - first name
  const FirstName = "Fernando";

  // primer apellido - last name
  const LastName = "Herrera";

  // días desde la última modificación - days since modification
  const DaySinceModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const MaxClassesPerStudent = 6;
})();