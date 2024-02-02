<?php

namespace App\Http\Controllers;

use App\Models\MessageThread;
use Inertia\Inertia;
use App\Models\Boble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BobleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Boble::query()->with('user');

        $query->when(request('soeg'), function ($query) {
            $query->where(function ($query) {
                $query->where('title', 'LIKE', '%' . request('soeg') . '%')
                        ->orWhere('text', 'LIKE', '%' . request('soeg') . '%');
            });
        });
        return Inertia::render('Bobler/index', [
            'bobler' => $query->orderBy('updated_at', 'DESC')->paginate(10)->withQueryString(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Boble $boble)
    {
        $currentUser = Auth::user()->id;

        $thread = MessageThread::query()
            ->where([['boble_id', $boble->id], ['user_id', $currentUser]])
            ->first();

        $boble->load('user');
        return Inertia::render('Bobler/Show', [
            'boble' => $boble,
            'thread' => $thread,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
