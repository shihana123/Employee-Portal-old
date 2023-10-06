<?php

namespace App\Http\Controllers;

use App\Models\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string',
            'password' => 'required',
            'remember_me' => 'boolean'
        ]);
        $user = User::whereEmail($credentials['email'])->first();
        $hash_check=false;
        if($user){
            $hash_check=Hash::check($credentials['password'], $user->password);
        }

        if(!$hash_check) {
            
            return response([
                'message' => 'This User does not exist',
                'status' => 404
            ], Response::HTTP_UNAUTHORIZED);
        }  

        $token = $user->createToken('main')->plainTextToken;
        $role = $user->user_type;
        $user->token = $token;
        $user->role = $role;

        if(Auth::attempt($credentials))
        {
            $user = Auth::user();
            // return response()->json(['token' => $token, 'role' => $role], 200);
            return response([
                'user' => auth()->user(),
                'access_token' => $token,
                'status' => 200
            ], Response::HTTP_OK);
        }
        else 
        {
            return response([
                'message' => 'Something went wrong'
            ], Response::HTTP_UNAUTHORIZED);
        }


        // if (Auth::attempt($credentials)) {
        //     $user = Auth::user();
        //     $token = $user->createToken('MyAppToken')->accessToken;
    
        //     return response()->json(['token' => $token], 200);
        // } else {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }
        
    }
}
