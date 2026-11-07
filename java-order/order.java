
import java.util.ArrayList;
import java.util.Scanner;

public class order {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<String> orders = new ArrayList<String>();

        System.out.println("--- Amal Order Book ---");

        while (true) {
            System.out.println("1. Add Order");
            System.out.println("2. Show All Orders");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = input.nextInt();
            input.nextLine();

            if (choice == 1) {
                System.out.print("Enter Order (Name - Item - Price): ");
                String newOrder = input.nextLine();
                orders.add(newOrder);
                System.out.println("Order Added!");
            } else if (choice == 2) {
                System.out.println("--- All Orders ---");
                if (orders.size() == 0) {
                    System.out.println("No orders yet!");
                } else {
                    for (int i = 0; i < orders.size(); i++) {
                        System.out.println((i + 1) + ". " + orders.get(i));
                    }
                }
            } else if (choice == 3) {
                System.out.println("Thank you! Bye Amal!");
                break;
            } else {
                System.out.println("Wrong choice! Try 1 to 3!");
            }
        }
        input.close();
    }
}
