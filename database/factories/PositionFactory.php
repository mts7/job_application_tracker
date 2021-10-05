<?php

namespace Database\Factories;

use App\Models\Position;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class PositionFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Position::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			'name' => $this->faker->text(),
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
		];
	}
}
