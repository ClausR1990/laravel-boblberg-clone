<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\MessageThread;
use Illuminate\Support\Facades\Auth;

class MessageThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $currentUser = Auth::user()->id;
        $query = MessageThread::query()->where('user_id', '=', $currentUser)->with('user', 'boble.user');

        return Inertia::render('Messages/index', [
            'messages' => $query->orderBy('updated_at', 'DESC')->paginate(10)->withQueryString(),
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
    public function show(MessageThread $messageThread)
    {
        $messages = Message::query()->where('message_thread_id', '=', $messageThread->id)->with('user');
        return Inertia::render('Messages/Show', [
            'thread' => $messageThread,
            'messages' => $messages->orderBy('created_at', 'ASC')->get()
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
