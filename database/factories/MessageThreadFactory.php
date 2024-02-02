<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Boble;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MessageThread>
 */
class MessageThreadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $bobles = Boble::all()->shuffle();
        $users = User::all()->shuffle();
        return [
            'boble_id' => $bobles->pop()->id,
            'user_id' => $users->pop()->id,
        ];
    }
}
