//package org.acme;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//
//public class Main {
//    public static void main(String[] args) throws Exception {
//        Connection connection = DriverManager.getConnection( "jdbc:sqlite::memory:");
//
//        // Create the table for food items
//        String createSQL = "CREATE TABLE FOOD(id int PRIMARY KEY, name varchar(20))";
//        PreparedStatement statement = connection.prepareStatement(createSQL);
//        statement.execute();
//
//        // Insert six food items into the FOOD table
//        String insertSQL = "INSERT INTO FOOD (id, name) VALUES " +
//                "(1, 'Pizza'), " +
//                "(2, 'Sushi'), " +
//                "(3, 'Tacos'), " +
//                "(4, 'Pasta'), " +
//                "(5, 'Burger'), " +
//                "(6, 'Salad')";
//        PreparedStatement statement2 = connection.prepareStatement(insertSQL);
//        statement2.execute();
//
//        // Select and print all food items before any update or delete
//        String selectSQL = "SELECT * FROM FOOD";
//        PreparedStatement statement3 = connection.prepareStatement(selectSQL);
//        ResultSet resultSet = statement3.executeQuery();
//
//        System.out.println("Before Update:");
//        while (resultSet.next()) {
//            System.out.println(resultSet.getString("name"));
//        }
//
//        // Update the food item with id = 1 (Pizza) to 'Margherita Pizza'
//        String updateSQL = "UPDATE FOOD SET name = 'Margherita Pizza' WHERE id = 1";
//        PreparedStatement statement4 = connection.prepareStatement(updateSQL);
//        statement4.execute();
//
//        // Re-select and print all food items after the update
//        resultSet = statement3.executeQuery();
//        System.out.println("\nAfter Update:");
//        while (resultSet.next()) {
//            System.out.println(resultSet.getString("name"));
//        }
//
//        // Delete the food item with id = 2 (Sushi)
//        String deleteSQL = "DELETE FROM FOOD WHERE id = 2";
//        PreparedStatement statement5 = connection.prepareStatement(deleteSQL);
//        statement5.execute();
//
//        // Re-select and print all food items after the deletion
//        resultSet = statement3.executeQuery();
//        System.out.println("\nAfter Delete:");
//        while (resultSet.next()) {
//            System.out.println(resultSet.getString("name"));
//        }
////
//        // Close all resources
//        resultSet.close();
//        statement.close();
//        statement2.close();
//        statement3.close();
//        statement4.close();
//        statement5.close();
//        connection.close();
//
//    }
//}
