<?php

namespace Database\Factories;

use App\Models\Resume;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResumeFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Resume::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition(): array
	{
		return [
			'id' => $this->faker->uuid(),
			'title' => $this->faker->title(),
			'version' => $this->faker->numberBetween(1, 50),
			'location' => $this->faker->randomElement(['CA', 'CO', 'FL', 'GA']),
			'phone' => $this->faker->phoneNumber(),
			'email' => $this->faker->safeEmail(),
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
		];
	}
}
