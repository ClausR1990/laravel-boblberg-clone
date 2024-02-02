<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Boble>
 */
class BobleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::all()->shuffle();
        return [
            'user_id' => $users->pop()->id,
            'title' => fake()->sentence(),
            'text' => fake()->paragraphs(rand(2,5), true),
            'created_at' => fake()->dateTimeBetween('-2 years', 'now'),
            'updated_at' => fake()->dateTimeBetween('created_at', 'now'),
        ];
    }
}
