<?php

namespace Database\Factories;

use App\Models\JobTechnology;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobTechnologyFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = JobTechnology::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			// TODO: pull a job ID and a technology ID
		];
	}
}
