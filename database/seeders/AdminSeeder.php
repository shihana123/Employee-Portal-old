<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table('users')->insert([
        //     'name' => Str::random(10),
        //     'email' => Str::random(10).'@gmail.com',
        //     'password' => Hash::make('password'),
        // ]);
        DB::table('users')->truncate();

        $data = [[
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123'),
            'user_type' => 1,
            'status' => 1
        ],
        [
            'name' => 'employee',
            'email' => 'emp@gmail.com',
            'password' => Hash::make('123'),
            'user_type' => 2,
            'status' => 1
        ]];
        DB::table('users')->insert($data);
    }
}
