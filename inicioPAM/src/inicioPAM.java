import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.Locale;
class inicioPAM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        boolean salir = false;
        while (!salir) {
            System.out.println("\n Diagnóstico");
            System.out.println("Hecho por Estrada Olguin Miguel Iván TIID-211");
            System.out.println("Elige cualquiera de las siguientes opciones");
            System.out.println("1. Reglamento POO");
            System.out.println("2. Lineamientos Classroom");
            System.out.println("3. Fechas de Parciales");
            System.out.println("4. Porcentajes por Parcial");
            System.out.println("5. Salir");
            System.out.print("Elige una opción: ");
            try {
                int opcion = scanner.nextInt();
                switch (opcion) {
                    case 1:
                        reglamentopoo(scanner);
                        break;
                    case 2:
                        lineamientos(scanner);
                        break;
                    case 3:
                        fechasparciales(scanner);
                        break;
                    case 4:
                        porcentajesparcial(scanner);
                        break;
                    case 5:
                        salir = true;
                        System.out.println("Programa terminado. ¡Hasta pronto!");
                        break;
                    default:
                        System.out.println(" Error: Opción no válida. Introduce un número del 1 al 5.");
                }
            } catch (InputMismatchException e) {
                System.out.println(" Error: Debes ingresar un número entero.");
                scanner.next();
            }
        }
        scanner.close();
    }
    public static void reglamentopoo(Scanner scanner) {
        System.out.println("\n Reglamento POO: ");
        System.out.print("\n 1. Respeto ");
        System.out.print("\n 2. Importante participación activa en orden ");
        System.out.print("\n 3. No entregar trabajos incompletos ");
        System.out.print("\n 4. No se aplica examen fuera de tiempo ");
        System.out.print("\n 5. Plagio de trabajos = 0 para todos ");
        System.out.print("\n 6. 3 faltas = Final del parcial ");
        System.out.print("\n 7. Calificación Máxima en final 8 ");
    }
    public static void lineamientos(Scanner scanner) {
        System.out.println("\n Lineamientos Classroom: ");
        System.out.print("\n 1. Entregar los trabajos para su revisión  ");
        System.out.print("\n 2. Entregas en PDF ");
        System.out.print("\n 3. Avisos de clase  ");
        System.out.print("\n 4. Entregas autorizadas con retraso, 5 Calif Max ");
    } 
    public static void fechasparciales(Scanner scanner) {
        System.out.println("\n Fechas de Parciales");
        System.out.print("\n 1. Primer Examen Parcial: 29-09-25  ");
        System.out.print("\n 2. Segundo Examen Parcial: 03-10-25 ");
        System.out.print("\n 3. Tercer Examen Parcial: 01-12-25 ");
        System.out.print("\n Examen Final: 08-12-25 ");
    }
    public static void porcentajesparcial(Scanner scanner) {
        System.out.println("\n Porcentajes por Parcial ");
        System.out.print("\n Primer Parcial:");
        System.out.print("\n-Evidencia de Conocimiento: 40% ");
        System.out.print("\n-Evidencia de Desempeño: 20%  ");
        System.out.print("\n-Evidencia de Producto: 30%  ");
        System.out.print("\n-Proyecto Integrador: 10%  ");
        System.out.print("\n Segundo Parcial:  ");
        System.out.print("\n-Evidencia de Conocimiento: 40% ");
        System.out.print("\n-Evidencia de Desempeño: 20%  ");
        System.out.print("\n-Evidencia de Producto: 20%  ");
        System.out.print("\n-Proyecto Integrador: 20%  ");
        System.out.print("\n Tercer Parcial ");
        System.out.print("\n-Evidencia de Conocimiento: 20% ");
        System.out.print("\n-Evidencia de Desempeño: 10%  ");
        System.out.print("\n-Evidencia de Producto: 40%  ");
        System.out.print("\n-Proyecto Integrador: 30%  ");
    }
}