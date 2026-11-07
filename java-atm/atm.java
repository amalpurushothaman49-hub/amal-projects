import java.util.Scanner;

public class atm {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int balance = 100;

        System.out.println("--- Amal Bank ATM ---");

        while (true) {
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = input.nextInt();

            if (choice == 1) {
                System.out.println("Balance: BD " + balance);
            } else if (choice == 2) {
                System.out.print("How much to deposit? ");
                int deposit = input.nextInt();
                balance = balance + deposit;
                System.out.println("Deposited! 【entity-New Balance¦canonical_name=New Balance】: BD " + balance);
            } else if (choice == 3) {
                System.out.print("How much to withdraw? ");
                int withdraw = input.nextInt();
                if (withdraw > balance) {
                    System.out.println("Not enough money!");
                } else {
                    balance = balance - withdraw;
                    System.out.println("Withdrawn! 【entity-New Balance¦canonical_name=New Balance】: BD " + balance);
                }
            } else if (choice == 4) {
                System.out.println("Thank you! Bye Amal!");
                break;
            } else {
                System.out.println("Wrong choice! Try 1 to 4!");
            }
        }
        input.close();
    }
}
