<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth; // Pastikan untuk mengimpor Auth

class UserController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register'); // Mengarahkan ke komponen Vue.js
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255|unique:users',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::create([
            'username' => $request->username,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'name' => $request->first_name . ' ' . $request->last_name, // Nama lengkap
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('home')
            ->with('success', 'User created successfully.');
    }

    public function show()
    {
        // Mengambil data pengguna saat ini
        return response()->json(Auth::user());
    }
}
