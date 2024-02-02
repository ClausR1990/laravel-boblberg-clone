<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(100)->create();

        \App\Models\Boble::factory(100)->create();

        \App\Models\MessageThread::factory(200)->create();

        $threads = \App\Models\MessageThread::with('user', 'boble')->get();

        foreach($threads as $thread)
        {
            $authors = [$thread->user->id, $thread->boble->user->id];
            for ($i = 0; $i < 20; $i++) {
                \App\Models\Message::factory()->create([
                    'message_thread_id' => $thread->id,
                    'user_id' => $authors[$i % 2], // Alternate between the two user IDs
                ]);
            }
        }

    }
}
