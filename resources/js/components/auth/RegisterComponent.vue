<template>

    <div id="app" class="login-container">
        <h3 class="login-header">Log in</h3>
        <form class="login-form">
            <p class="signup-link">Already have an account? <router-link to="/">Login</router-link></p>

            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email"  
                class="form-control form-input">
                <div  class="invalid-feedback"></div>
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <div class="password-input">
                <input type="password"  id="password" class="form-control form-input">
                <button type="button" class="password-toggle" ></button>
                </div>
                
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <!-- <p class="forgot-password-link">Forgot your password? <a href="#">Click here</a></p> -->
        </form>
    </div>
    
</template>