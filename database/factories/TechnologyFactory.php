<?php

namespace Database\Factories;

use App\Models\Technology;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class TechnologyFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Technology::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			'name' => $this->faker->unique()->colorName(),
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
		];
	}
}
