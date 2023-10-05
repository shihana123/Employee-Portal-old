<template>

    <div id="app" class="login-container">
        <h3 class="login-header">Log in</h3>
        <Form @submit="handleLogin" class="login-form" :validation-schema="schema">
            <!-- <p class="signup-link">Need an account? <router-link to="/signup">Sign up</router-link></p> -->
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <Field name="email" type="email" class="form-control form-input"/>
                <ErrorMessage name="email" class="text-danger"/>
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <Field name="password" type="password" class="form-control form-input"/>
                <ErrorMessage name="password" class="text-danger"/>
            </div>
            
            <!-- <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <div class="password-input">
                    <Field type="password" v-model="form.password"  id="password" class="form-control form-input">
                    <button type="button" class="password-toggle" ></button>
                </div>
            </div> -->
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <button type="submit" class="btn btn-primary">Login</button>
            <!-- <p class="forgot-password-link">Forgot your password? <a href="#">Click here</a></p> -->
        </Form>
    </div>
    
</template>

<script>

  
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';
    import axios from 'axios';
    import { useRouter } from "vue-router";
    

    const router = useRouter();

    function showError() {
        show_error.value =true
    }
    
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        data()
        {
            const schema = yup.object({
                email: yup.string().required().email(),
                password: yup.string().required(),
            });
            return {
                schema,
                errorMessage: null,
            }
        },
        methods:{
            handleLogin(values)
            {
                // console.log(values);
                axios.post('api/login', values).then(res => {
                  
                    
                        console.log(res.response.data);
                        // if(res.data.role == 1){
                        //     console.log('admin');
                        //     router.push({ name: "About"});
                        // } 
                        // else{
                        //     // router.push({ name: "employer-dashboard"});
                        // }
                    
                    
                    
                }).catch(err =>{
                    console.log(err.response.data.message);
                    this.errorMessage = err.response.data.message;
                })
            },
            
        }
    }
</script>