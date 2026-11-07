import java.util.Scanner;

public class marks {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("--- Amal Student Marks ---");
        System.out.print("Enter your marks (0 to 100): ");
        int marks = input.nextInt();

        if (marks >= 90) {
            System.out.println("Grade A! Excellent Amal!");
        } else if (marks >= 70) {
            System.out.println("Grade B! Very Good!");
        } else if (marks >= 50) {
            System.out.println("Grade C! Pass!");
        } else {
            System.out.println("Fail! Try again Amal!");
        }

        System.out.println("Thank you! Bye Amal!");
    }
}
