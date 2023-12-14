function Registration(){
    return(
    <div class="register-container">
      <h2>Register</h2>
      <form>
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName"></input>
  
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"></input>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"></input>
 
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword"></input>
  
      <button type="submit">Sign Up</button>
    </form>
  </div>
);
}
export default Registration;