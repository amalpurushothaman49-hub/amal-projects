import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Amal Bill Calculator - Java");
        System.out.print("Customer Name: ");
        String name = input.nextLine();

        System.out.print("Number of Shirts: ");
        int shirts = input.nextInt();

        System.out.print("Price per Shirt (BD): ");
        int price = input.nextInt();

        int total = shirts * price;

        System.out.println("Customer: " + name);
        System.out.println("Total Bill: BD " + total);

        input.close();
    }
}
