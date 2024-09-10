import java.sql.*;
import java.io.*;

public class TeleDesk {
    public static void main(String args[]) {
        String jdbcUrl = "jdbc:mysql://localhost:3307/bank_db";
        DataInputStream din = new DataInputStream(System.in);
        String ch;
        int flag  = 0;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(jdbcUrl, "root", "");
            Statement st = conn.createStatement();
            System.out.println("Enter the characters of user name: ");
            ch = din.readLine();
            ResultSet result = st.executeQuery("select * from tele where name LIKE '%" + ch + "%'");
            while(result.next()){
                System.out.println(result.getString("name"));
                System.out.println(result.getString("phoneno"));
                flag =1;
                if(flag == 0) {
                    System.out.println("No record found");
                }
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
