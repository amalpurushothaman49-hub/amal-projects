
import java.util.Scanner;
import java.util.Random;

public class guess {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Random random = new Random();

        int secret = random.nextInt(10) + 1;
        int tries = 0;

        System.out.println("--- Amal Guessing Game ---");
        System.out.println("I thought a number from 1 to 10! Guess it!");

        while (true) {
            System.out.print("Enter your guess: ");
            int guess = input.nextInt();
            tries++;

            if (guess == secret) {
                System.out.println("WOW! Correct! You guessed in " + tries + " tries!");
                break;
            } else if (guess > secret) {
                System.out.println("Too High! Try smaller!");
            } else {
                System.out.println("Too Low! Try bigger!");
            }
        }

        System.out.println("Thank you! Bye Amal!");
    }
}
